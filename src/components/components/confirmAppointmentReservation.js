import React from "react";
import {Button, Flex, Heading} from "@aws-amplify/ui-react";
import {getDateTimeFromAppointment} from "../converters";
import {DataStore} from "aws-amplify";
import {Appointment} from "../../models";
import {useNavigate} from "react-router-dom";

// Ovo je komponenta koja prikazuje i stvara button da se kreira termin
const ConfirmAppointmentReservation = ({appointment}) => {
    const navigate = useNavigate();

    function createAppointment() {
        DataStore.save(new Appointment(appointment)).then(a => {
            navigate('/appointment/' + a.id)
        })
    }


    return (
        <Flex direction={"column"}>
            <Heading level={4}>{getDateTimeFromAppointment(appointment)}</Heading>
            <Button variation={"primary"} onClick={createAppointment}>Skupi ekipu</Button>
        </Flex>
    );


}

export default ConfirmAppointmentReservation;
