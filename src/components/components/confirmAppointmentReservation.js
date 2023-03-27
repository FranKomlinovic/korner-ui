import React from "react";
import {Button, Flex} from "@aws-amplify/ui-react";
import {KornerAppointmentInfoUpdated} from "../../ui-components";
import {calculateDurationFromAppointment, convertSportsEnumToString, getDateTimeFromAppointment} from "../converters";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";
import {useNavigate} from "react-router-dom";

// Ovo je komponenta koja prikazuje i stvara button da se kreira termin
const ConfirmAppointmentReservation = ({field, appointment}) => {
    const navigate = useNavigate();

    function createAppointment() {
        console.log(appointment)
        DataStore.save(new Appointment(appointment)).then(a => {
            navigate('/appointment/' + a.id)
        })
    }


    return (
        <Flex direction={"column"}>
            <KornerAppointmentInfoUpdated fields={field} time={getDateTimeFromAppointment(appointment)}
                                          pricePerPerson={field.price / field.minPlayers} acceptedNumber={0}
                                          duration={calculateDurationFromAppointment(appointment)}
                                          sport={convertSportsEnumToString(appointment.sport)}/>
            <Button variation={"primary"} onClick={createAppointment}>Predloži termin suigračima</Button>
        </Flex>
    );


}

export default ConfirmAppointmentReservation;
