import React, {useEffect, useState} from "react";
import {Button, CheckboxField, Flex, Heading, Text, TextField} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import {getDateTimeFromAppointment} from "../../functions/converters";
import {Appointment, ReccuringAppointment, Sport} from "../../models";
import {confirmAppointment} from "../../functions/lambdas";
import {DataStore} from "aws-amplify";

// Ovo je komponenta koja prikazuje i stvara button da se kreira termin
const FieldConfirmAppointmentReservation = ({onCreateFunction, appointment, field, user}) => {
    const navigate = useNavigate();
    const [name, setName] = useState(null)
    const [repeatable, setRepeatable] = useState(false)
    const [appointmentToCreate, setAppointmentToCreate] = useState()
    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        setIsOwner(field?.ownerID === user?.attributes.sub);
        setAppointmentToCreate(appointment);
    }, [appointment, field, user]);


    const ownerCreate = (a) => {
        confirmAppointment(a.id);
        onCreateFunction();
    }
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
                isOwner ? ownerCreate(a) : navigate('/appointment/' + a.id);
            }
        )
    }

    const createOwnerRepeatableAppointment = () => {

        const date = new Date(appointmentToCreate?.date)
        const afterYear = new Date()
        afterYear.setMonth(11, 31)

        const reccuringAppointment = new ReccuringAppointment({
            bookerID: user?.attributes.sub,
            start: appointmentToCreate.start,
            end: appointmentToCreate.end,
            startDate: date.toISOString().split('T')[0],
            endDate: afterYear.toISOString().split('T')[0],
            fieldsID: field?.id,
            bookerName: isOwner && name ? name : user?.attributes.given_name + " " + user?.attributes.family_name,

        });

        DataStore.save(reccuringAppointment).then(a => {
            // Iterates and increases date by one week
            while (date.toISOString().split('T')[0] <= a.endDate) {
                const app = {
                    start: a.start,
                    end: a.end,
                    fieldsID: a.fieldsID,
                    date: date.toISOString().split('T')[0],
                    confirmed: true,
                    bookerID: a.bookerID,
                    bookerName: a.bookerName,
                    price: field.price,
                    reccuringappointmentID: a.id,
                    sport : Sport.FUTSAL
                }
                DataStore.save(new Appointment(app)).then(ab => {

                    // If first appointment, check for other reservation
                        if (date === a.date) {
                            confirmAppointment(a.id);
                        }
                    }
                )
                // Increase dates
                date.setDate(date.getDate() + 7);
            }
            onCreateFunction();
        })
    }
    return (
        <Flex direction={"column"} alignItems={"center"} padding={"1rem"} alignSelf={"center"}>
            <Heading level={5}>{field.name}</Heading>
            <Heading level={4}>{getDateTimeFromAppointment(appointment)}</Heading>
            {isOwner && <CheckboxField
                label="Ponovi svaki tjedan do kraja godine"
                name="repeatable"
                checked={repeatable}
                onChange={(e) => setRepeatable(e.target.checked)}
                value={"yes"}/>
            }
            {isOwner && <TextField
                label={"Naziv ekipe"}
                onChange={(a) => setName(a.currentTarget.value)}
            />}
            <Button backgroundColor={"green.90"} color={"white"}
                    onClick={repeatable ? createOwnerRepeatableAppointment : createAppointment}>{isOwner ? "Rezerviraj termin" : "Skupi ekipu"}</Button>
            {!isOwner &&
                <Text alignSelf={"center"} fontSize={"small"} variation={"warning"}>Klikom na gumb termin neće biti
                    odmah rezerviran, to možete učiniti u sljedećem koraku</Text>}
        </Flex>
    );


}

export default FieldConfirmAppointmentReservation;
