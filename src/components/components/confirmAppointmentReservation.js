import React from "react";
import {Button, Flex, Heading} from "@aws-amplify/ui-react";
import {KornerAppointmentInfoUpdated} from "../../ui-components";
import {calculateDurationFromAppointment, convertSportsEnumToString, getDateTimeFromAppointment} from "../converters";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";
import {useNavigate} from "react-router-dom";
import KornerAppointmentInfoUpdatedWrapper from "../wrappers/kornerAppointmentInfoUpdatedWrapper";

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
            {/*<KornerAppointmentInfoUpdatedWrapper field={field} appointment={appointment} responses={null}/>*/}
            <Heading level={4}>{getDateTimeFromAppointment(appointment)}</Heading>
            <Button variation={"primary"} onClick={createAppointment}>Rezerviraj</Button>
        </Flex>
    );


}

export default ConfirmAppointmentReservation;
