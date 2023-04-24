import React, {useState} from "react";
import {Badge, Button, Card, Flex, Heading, Text} from "@aws-amplify/ui-react";
import KornerAppointmentInfoUpdatedWrapper from "../../wrappers/kornerAppointmentInfoUpdatedWrapper";
import ReservationForm from "../reservationForm";
import ListUsersForAppointment from "../listUsersForAppointment";
import AddGuestForm from "../addGuestForm";
import {FaLink, FaLock, FaTrash} from "react-icons/fa";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../../models";
import {Tooltip} from "@mui/material";
import {confirmAlert} from "react-confirm-alert";
import {confirmAppointment} from "../../lambdas";
import KornerAppointmentShortWrapper from "../../wrappers/kornerAppointmentShortWrapper";

const OwnerAppointment = ({user, appointment, responses, responseToUpdate}) => {
    const [open, setOpen] = useState(false);

    const ReserveLockButton = () => {
        const numberOfPeople = ` ${getNumberOfAcceptedUsers()}/${appointment?.minPlayers} `;
        return (
            <Flex direction={"column"}>
                <Button variation={"primary"} isDisabled><FaLock/>{numberOfPeople}Rezerviraj termin*</Button>
                <Text variation={"warning"} fontSize={"small"}>*Moguće rezervirati kada
                    skupite dovoljno igrača</Text>
            </Flex>)
    }

    // Button to create reservation
    const ReservationButton = () => {
        return getNumberOfAcceptedUsers() < appointment?.minPlayers ? <ReserveLockButton/> :
            <Button variation={"primary"} onClick={() => confirmAppointment(appointment.id)}>Rezerviraj termin</Button>
    }

    // Gets button or badge regarding of status
    const ButtonOrBadge = () => {
        return appointment?.confirmed || appointment?.canceled ? <StatusBadge/> : <ReservationButton/>
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
                        }))
                    }
                },
                {
                    label: 'Ne'
                }
            ]
        });
    };

    // All other options for owner
    const OwnerOptions = () => {
        return (
            <Flex direction={"column"} alignItems={"center"}>
                <Heading level={5}>Dodaj goste:</Heading>
                <AddGuestForm appointmentId={appointment?.id}/>
                {!appointment?.confirmed &&
                    <Button variation={"destructive"} onClick={() => cancelAppointment()}><FaTrash/> Obriši
                        termin</Button>}
            </Flex>
        )
    }

    // Gets button for sharing link to other users
    const ShareLink = () => {
        return <Tooltip onClose={() => setOpen(false)} open={open} leaveTouchDelay={1200}
                        title={"Link kopiran"}>
            <Button onClick={copyLink}><FaLink/> Pozovi prijatelje</Button>
        </Tooltip>
    }

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            <Card alignSelf={"center"} variation={"elevated"} width={"100%"}>
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                    <KornerAppointmentShortWrapper appointment={appointment} />
                    <ButtonOrBadge/>
                    <ShareLink/>
                </Flex>
            </Card>
            <Card alignSelf={"center"} variation={"elevated"} width={"100%"}>
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                    <ReservationForm user={user} appointmentId={appointment.id} responseToUpdate={responseToUpdate}/>
                </Flex>
            </Card>
            <Card alignSelf={"center"} variation={"elevated"} width={"100%"}>
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                    <ListUsersForAppointment user={user} isOwner={true} responses={responses}/>
                </Flex>
            </Card>
            <Card alignSelf={"center"} variation={"elevated"} width={"100%"}>
                <OwnerOptions/>
            </Card>
        </Flex>
    )


    function getNumberOfAcceptedUsers() {
        return responses?.filter(a => a.accepted === true).length;
    }

    function copyLink() {
        navigator.clipboard.writeText(window.location.href)
        setOpen(true)
    }
}


export default OwnerAppointment;

