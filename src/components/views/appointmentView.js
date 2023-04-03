import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Auth, DataStore, Hub} from "aws-amplify";
import {Appointment, Fields, Response} from "../../models";


import {Badge, Button, Divider, Flex, Heading, Text} from "@aws-amplify/ui-react";
import KornerAppointmentInfoUpdatedWrapper from "../wrappers/kornerAppointmentInfoUpdatedWrapper";
import ReservationForm from "../components/reservationForm";
import ListUsersForAppointment from "../components/listUsersForAppointment";
import AddGuestForm from "../components/addGuestForm";
import {FaLink, FaLock, FaTrash} from "react-icons/fa";
import {Tooltip} from "@mui/material";
import {confirmAlert} from "react-confirm-alert";
import UnauthorizedReservationForm from "../components/unauthorizedReservationForm";

const AppointmentView = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState(null);
    const [field, setField] = useState(null);
    const [responses, setResponses] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUsername] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        appointment && Auth.currentSession().then((u) => {
            let payload = u.getIdToken().payload;
            setUsername(payload.given_name + " " + payload.family_name);
            setUserId(payload.sub);
            setIsOwner(appointment.bookerID === payload.sub);
        }).catch(a => {});
    }, [appointment]);

    useEffect(() => {
        DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(appointmentId)])).then(r => {
            setResponses(r);
        })

    }, [appointmentId]);


    useEffect(() => {
        appointment &&
        DataStore.query(Fields, appointment.fieldsID).then(f => {
            setField(f);
        })

    }, [appointment]);


    useEffect(() => {
        DataStore.query(Appointment, appointmentId).then(a => {
            setAppointment(a);
        })

    }, [appointmentId]);


    const deleteAppointment = () => {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati ovu rezervaciju?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => {
                        DataStore.delete(appointment).then(() => navigate("/"));
                    }
                },
                {
                    label: 'Ne'
                }
            ]
        });
    };

    function checkIfAvailableForReservation() {
        let disabled = true;
        if (responses != null && field != null) {
            disabled = responses.filter(a => a.accepted === true).length < field.minPlayers;
        }

        return disabled;

    }

    function confirmAppointment() {
        DataStore.save(Appointment.copyOf(appointment, (item) => {
            item.confirmed = true;
        })).then(a => setAppointment(a))
    }

    function getNumberOfPeople() {
        if (responses != null && field != null) {
            return (responses.filter(a => a.accepted === true).length + "/" + field.minPlayers + " ");
        }

    }

    function getButton() {
        if (appointment === null) {
            return;
        }
        if (!isOwner) {
            return;
        }
        if (checkIfAvailableForReservation()) {
            return (
                <>
                    <Button variation={"primary"} isDisabled={true}><FaLock/>{getNumberOfPeople()}Rezerviraj
                        termin*</Button>
                    <Text variation={"warning"} fontSize={"small"}>*Moguće rezervirati kada
                        skupite dovoljno igrača</Text>
                </>);
        }
        return (<Button variation={"primary"} onClick={() => confirmAppointment()}>Rezerviraj termin</Button>)

    }

    function getBadge() {
        if (appointment === null) {
            return;
        }
        if (appointment.confirmed) {
            return <Badge textAlign={"center"} alignSelf={"center"} variation={"success"}>Teren je rezerviran</Badge>;
        }

    }

    function copyLink() {
        navigator.clipboard.writeText(window.location.href);
        setOpen(true);

    }

    const renderKornerAppointmentInfo = (
        <Flex direction={"column"}>
            <KornerAppointmentInfoUpdatedWrapper
                appointment={appointment}
                field={field}
                responses={responses}
            />
            {isOwner && !appointment.confirmed && getButton()}
            {getBadge()}
            {isOwner &&
                <Tooltip onClose={() => setOpen(false)} open={open} leaveTouchDelay={1200}
                         title={"Link kopiran"}><Button
                    onClick={() => copyLink()}>
                    <FaLink/> Pozovi prijatelje
                </Button></Tooltip>
            }
        </Flex>
    );

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {renderKornerAppointmentInfo}
            <Divider size={"small"}/>
            <Heading alignSelf={"self-start"} marginLeft={"10px"} level={5}>Vaš odgovor:</Heading>
            {userId &&
                <ReservationForm userName={userName} userId={userId} responses={responses} appointmentId={appointmentId}
                                 functionTest={(a) => setResponses(a)}/>}
            {!userId && <UnauthorizedReservationForm responses={responses} appointmentId={appointmentId}
                                                     functionTest={(a) => setResponses(a)}/>}
            <Divider size={"small"}/>
            <Heading alignSelf={"self-start"} marginLeft={"10px"} level={5}>Igrači:</Heading>
            <ListUsersForAppointment isOwner={isOwner} responses={responses}/>
            {isOwner && <Divider size={"small"}/>}
            {isOwner && <Heading alignSelf={"self-start"} marginLeft={"10px"} level={5}>Dodaj goste:</Heading>}
            {isOwner && <AddGuestForm appointmentId={appointmentId} functionTest={(a) => setResponses(a)}/>}
            <Divider size={"small"}/>
            {isOwner && !appointment.confirmed &&
                <Button variation={"destructive"} onClick={() => deleteAppointment()}><FaTrash/> Obriši
                    rezervaciju</Button>}
        </Flex>
    );

}


export default AppointmentView;

