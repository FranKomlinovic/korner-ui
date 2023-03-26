import React from "react";
import {Button, Flex} from "@aws-amplify/ui-react";
import {KornerAppointmentInfoUpdated} from "../ui-components";
import {calculateDurationFromAppointment, convertSportsEnumToString, getDateTimeFromAppointment} from "./converters";

const ConfirmAppointmentReservation = ({field, appointment}) => {

    function createAppointment() {
    }
    console.log(appointment);

    return (
        <Flex direction={"column"}>
            <KornerAppointmentInfoUpdated fields={field} time={getDateTimeFromAppointment(appointment)}
                                          pricePerPerson={field.price / field.minPlayers} acceptedNumber={0}
                                          duration={calculateDurationFromAppointment(appointment)}
                                          sport={convertSportsEnumToString(appointment.sport)}/>
            <Button onClick={createAppointment}>Predloži termin suigračima</Button>
        </Flex>
    );


}

export default ConfirmAppointmentReservation;
