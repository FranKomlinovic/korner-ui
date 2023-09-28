// Button to create reservation
import {Button, Flex, Text} from "@aws-amplify/ui-react";
import {confirmAppointment} from "../../functions/lambdas";
import React from "react";
import {FaLock} from "react-icons/fa";
import {getDateTimeFromAppointment} from "../../functions/converters";
import sendAppointmentNotification from "../../custom-hooks/sendAppointmentNotification";

const AppointmentReservationButton = ({responses, field, appointment}) => {

    function getNumberOfAcceptedUsers() {
        return responses?.filter(a => a.accepted === true).length;
    }

    const reserveAppointment = () => {
        const msg = `Vaš teren ${field?.name} je rezerviran u ${getDateTimeFromAppointment(appointment)}`;
        sendAppointmentNotification(msg, [field?.ownerID])
        confirmAppointment(appointment.id)
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
        <Button variation={"primary"} onClick={reserveAppointment}>Rezerviraj termin</Button>
}

export default AppointmentReservationButton
