// Button to create reservation
import {Button, Flex, Text} from "@aws-amplify/ui-react";
import {confirmAppointment} from "../../functions/lambdas";
import React from "react";
import {FaLock} from "react-icons/fa";

const AppointmentReservationButton = ({responses, field, appointment, role}) => {

    if (role !== "APPOINTMENT_OWNER" || appointment?.confirmed || appointment?.canceled) {
        return;
    }
    function getNumberOfAcceptedUsers() {
        return responses?.filter(a => a.accepted === true).length;
    }

    const ReserveLockButton = () => {
        const numberOfPeople = ` ${getNumberOfAcceptedUsers()}/${field?.minPlayers} `;
        return (
            <Flex direction={"column"}>
                <Button variation={"primary"} isDisabled><FaLock/>{numberOfPeople}Rezerviraj termin*</Button>
                <Text variation={"warning"} fontSize={"small"}>*Moguće rezervirati kada
                    skupite dovoljno igrača</Text>
            </Flex>)
    }

    return getNumberOfAcceptedUsers() < field?.minPlayers ? <ReserveLockButton/> :
        <Button variation={"primary"} onClick={() => confirmAppointment(appointment.id)}>Rezerviraj termin</Button>
}

export default AppointmentReservationButton
