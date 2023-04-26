import React, {useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {getDateTimeFromAppointment} from "../functions/converters";
import {DataStore} from "aws-amplify";
import {Appointment} from "../models";
import {useNavigate} from "react-router-dom";

// Ovo je komponenta koja prikazuje i stvara button da se kreira termin
const ConfirmAppointmentReservation = ({appointment, isOwner}) => {
    const navigate = useNavigate();
    const [name, setName] = useState(null)


    function createAppointment() {
        if (isOwner && name) {
            appointment.bookerName = name;
        }
        DataStore.save(new Appointment(appointment)).then(a => {
            navigate('/appointment/' + a.id)
        })
    }

    const text = () => {
        return isOwner ? "Rezerviraj termin" : "Skupi ekipu"
    };


    return (
        <Flex direction={"column"}>
            <Heading level={4}>{getDateTimeFromAppointment(appointment)}</Heading>
            {isOwner && <TextField
                label={"Ime i prezime"}
                onChange={(a) => setName(a.currentTarget.value)}
            />}
            <Button variation={"primary"} onClick={createAppointment}>{text()}</Button>
        </Flex>
    );


}

export default ConfirmAppointmentReservation;
