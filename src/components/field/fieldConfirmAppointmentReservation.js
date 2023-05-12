import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, Text, TextField} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {useNavigate} from "react-router-dom";
import {getDateTimeFromAppointment} from "../../functions/converters";
import {Appointment, Sport} from "../../models";
import {confirmAppointment} from "../../functions/lambdas";

// Ovo je komponenta koja prikazuje i stvara button da se kreira termin
const FieldConfirmAppointmentReservation = ({appointment, field, user}) => {
    const navigate = useNavigate();
    const [name, setName] = useState(null)
    const [appointmentToCreate, setAppointmentToCreate] = useState()
    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        setIsOwner(field?.ownerID === user?.attributes.sub);
        setAppointmentToCreate(appointment);
    }, [appointment, field, user]);


    const createAppointment = () => {
        appointmentToCreate.bookerName = isOwner && name ?
            name :
            user?.attributes.given_name + " " + user?.attributes.family_name;

        appointmentToCreate.fieldsID = field?.id
        appointmentToCreate.confirmed = isOwner
        appointmentToCreate.bookerID = user?.attributes.sub
        appointmentToCreate.price = field?.price
        appointmentToCreate.canceled = false
        appointmentToCreate.sport = Sport.FUTSAL
        DataStore.save(new Appointment(appointmentToCreate)).then(a => {
                isOwner ? confirmAppointment(a.id) : navigate('/appointment/' + a.id);
            }
        )
    }

    return (
        <Flex direction={"column"} alignItems={"center"} padding={"1rem"} alignSelf={"center"}>
            <Heading level={5}>{field.name}</Heading>
            <Heading level={4}>{getDateTimeFromAppointment(appointment)}</Heading>
            {isOwner && <TextField
                label={"Naziv ekipe"}
                onChange={(a) => setName(a.currentTarget.value)}
            />}
            <Button backgroundColor={"green.90"} color={"white"}
                    onClick={createAppointment}>{isOwner ? "Rezerviraj termin" : "Skupi ekipu"}</Button>
            {!isOwner && <Text alignSelf={"center"} fontSize={"small"} variation={"warning"}>Klikom na gumb termin neće biti odmah rezerviran, to možete učiniti u sljedećem koraku</Text>}
        </Flex>
    );


}

export default FieldConfirmAppointmentReservation;
