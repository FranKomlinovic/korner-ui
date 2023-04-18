import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Response} from "../../models";


import {Badge, Button, Divider, Flex, Heading, Loader, Text} from "@aws-amplify/ui-react";
import KornerAppointmentInfoUpdatedWrapper from "../wrappers/kornerAppointmentInfoUpdatedWrapper";
import ReservationForm from "../components/reservationForm";
import ListUsersForAppointment from "../components/listUsersForAppointment";
import AddGuestForm from "../components/addGuestForm";
import {FaLink, FaLock, FaTrash} from "react-icons/fa";
import {Tooltip} from "@mui/material";
import {confirmAlert} from "react-confirm-alert";
import UnauthorizedReservationForm from "../components/unauthorizedReservationForm";
import {SortDirection} from "@aws-amplify/datastore";

const AppointmentView = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState();
    const [appointmentNotFound, setAppointmentNotFound] = useState(false);
    const [responses, setResponses] = useState();
    const [user, setUser] = useState();
    const [isOwner, setIsOwner] = useState(false);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState();
    const [responseToUpdate, setResponseToUpdate] = useState();

    // Sets appointments
    useEffect(() => {
        if (!appointmentId) {
            setAppointmentNotFound(false);
        }
        DataStore.query(Appointment, appointmentId).then(a => {
            a ? setAppointment(a) : setAppointmentNotFound(true);
        }).catch(a => {
        })

    }, [appointmentId]);

    // Sets form
    useEffect(() => {
        user ?
            setForm(<ReservationForm user={user} appointmentId={appointmentId} responseToUpdate={responseToUpdate}/>)
            :
            setForm(<UnauthorizedReservationForm responses={responses} appointmentId={appointmentId}/>)

    }, [appointmentId, user, responseToUpdate, responses]);

    // Sets user and checks if user is owner
    useEffect(() => {
        Auth.currentSession().then((u) => {
            const payload = u.getIdToken().payload;
            setUser({
                name: payload.given_name + " " + payload.family_name,
                sub: payload.sub,
                photo: payload.picture
            });
            setIsOwner(appointment?.bookerID === payload.sub);
        }).catch(() => {
        });
    }, [appointment]);

    useEffect(() => {
        setResponseToUpdate(responses?.find((response) => response.playerID === user?.sub));
    }, [responses, user]);

    // Gets all responses
    useEffect(() => {
        DataStore.observeQuery(Response, (c) => c.and(c => [c.appointmentID.eq(appointmentId)]), {
            sort: (s) => s.accepted(SortDirection.DESCENDING).createdAt(SortDirection.ASCENDING)
        }).subscribe(r => {
            setResponses(r.items)
        })

    }, [appointmentId]);


    // Checks if appointment is available for reservation
    const isAvailableForReservation = () => {
        return getNumberOfAcceptedUsers() < appointment?.minPlayers;
    }

    // Button to create reservation
    const ReservationButton = () => {
        //Confirms appointment
        const confirmAppointment = () => {
            //TODO Ovo treba biti lambda koja ponistava sve ostale termine
            DataStore.save(Appointment.copyOf(appointment, (item) => {
                item.confirmed = true;
            })).then(a => setAppointment(a))
        }

        if (!isOwner) {
            return;
        }
        if (isAvailableForReservation) {
            return (
                <Flex direction={"column"}>
                    <Button variation={"primary"} isDisabled><FaLock/>{getNumberOfPeople()}Rezerviraj
                        termin*</Button>
                    <Text variation={"warning"} fontSize={"small"}>*Moguće rezervirati kada
                        skupite dovoljno igrača</Text>
                </Flex>);
        }
        return (<Button variation={"primary"} onClick={confirmAppointment}>Rezerviraj termin</Button>)

    }

    // Badge that shows status of current appointment
    const StatusBadge = () => {
        if (appointment?.canceled) {
            return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"error"}>Termin je
                otkazan</Badge>;
        }
        if (appointment?.confirmed) {
            return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"success"}>Termin je
                rezerviran</Badge>;
        }

    }

    // Gets button or badge regarding of status
    const ButtonOrBadge = () => {
        if (!isOwner) {
            return;
        }
        if (appointment?.confirmed || appointment?.canceled) {
            return <StatusBadge/>;
        }
        return <ReservationButton/>;
    }

    // Gets button for sharing link to other users
    const ShareLink = () => {
        if (isOwner) {
            return <Tooltip onClose={() => setOpen(false)} open={open} leaveTouchDelay={1200}
                            title={"Link kopiran"}>
                <Button onClick={copyLink}><FaLink/> Pozovi prijatelje</Button>
            </Tooltip>
        }
    }

    // All other options for owner
    const OwnerOptions = () => {
        if (!isOwner) {
            return;
        }
        return (
            <Flex direction={"column"} alignItems={"center"}>
                <Heading level={5}>Dodaj goste:</Heading>
                <AddGuestForm appointmentId={appointmentId} functionTest={(a) => setResponses(a)}/>
                {!appointment?.confirmed &&
                    <Button variation={"destructive"} onClick={() => cancelAppointment()}><FaTrash/> Obriši
                        termin</Button>}
            </Flex>
        )
    }

    const GetReservationForm = () => {
        return (
            <Flex direction={"column"}>
                <Heading alignSelf={"self-start"} marginLeft={"10px"} level={5}>Vaš odgovor:</Heading>
                {form}
            </Flex>)
    }

    // Dialog for deleting appointment
    const cancelAppointment = () => {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati ovu rezervaciju?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => {
                        DataStore.save(Appointment.copyOf(appointment, (item) => {
                            item.canceled = true;
                        })).then((a) => {
                            console.log(a);
                            setAppointment(a)
                        });
                    }
                },
                {
                    label: 'Ne'
                }
            ]
        });
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setOpen(true)
    }

    const responsesText = () => {
        const plus = responses?.filter(a => a.accepted).length
        const minus = responses?.filter(a => !a.accepted).length
        return "(" + plus + "/" + (plus + minus) + ")";
    }

    const NoAppointment = () => {
        return <Heading>Ne postoji traženi termin</Heading>
    }

    const Content = () => {
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <KornerAppointmentInfoUpdatedWrapper user={user} appointment={appointment} responses={responses}/>
                <ButtonOrBadge/>
                <ShareLink/>
                <Divider size={"small"}/>
                <GetReservationForm/>
                <Divider size={"small"}/>
                <Heading level={5}>Igrači: {responsesText()}</Heading>
                <ListUsersForAppointment user={user} isOwner={isOwner} responses={responses}/>
                <Divider size={"small"}/>
                <OwnerOptions/>

            </Flex>
        );
    }

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {!appointmentNotFound && !appointment && <Loader variation="linear"/>}
            {appointmentNotFound && !appointment && <NoAppointment/>}
            {!appointmentNotFound && <Content/>}
        </Flex>
    )


    function getNumberOfPeople() {
        return getNumberOfAcceptedUsers() + "/" + appointment?.minPlayers + " "
    }

    function getNumberOfAcceptedUsers() {
        return responses?.filter(a => a.accepted === true).length;
    }
}


export default AppointmentView;

