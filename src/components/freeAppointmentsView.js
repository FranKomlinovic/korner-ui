import {API} from "aws-amplify";
import React, {useEffect, useState} from "react";
import {Button, Flex, Grid, Heading, Loader, SelectField, Text, View} from "@aws-amplify/ui-react";
import {getCurrentDateInDynamoDbString, getDateInString, getDateTimeFromAppointment} from "../functions/converters";
import {Sport} from "../models";
import ConfirmAppointmentReservation from "./confirmAppointmentReservation";
import {useNavigate} from "react-router-dom";

const FreeAppointmentsView = ({field, user, isOwner}) => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState();
    const [reservedAppointments, setReservedAppointments] = useState();
    const [duration, setDuration] = useState(60);
    const [date, setDate] = useState(getCurrentDateInDynamoDbString(0));
    const [displayAppointments, setDisplayAppointments] = useState();
    const [appointmentToCreate, setAppointmentToCreate] = useState();

    useEffect(() => {
        field && API.get('availableAppointments', '/appointments/available/' + field.id).then(
            a => {
                setReservedAppointments(a.reservedAppointments)
                setAppointments(a.availableAppointments);
            }
        )
    }, [field]);

    useEffect(() => {
        setDisplayAppointments(appointments?.filter(appointment =>
            appointment.date === date
            && appointment.duration === duration
        ));

    }, [date, duration, appointments]);

    function openConfirm(object) {
        object.bookerName = user.attributes.given_name + ' ' + user.attributes.family_name;
        object.bookerID = user.attributes.sub;
        object.fieldsID = field.id;
        object.fieldName = field.name;
        object.fieldPhoto = field.photo;
        object.confirmed = isOwner;
        object.address = field.address;
        object.minPlayers = field.minPlayers;
        object.price = field.price;
        object.canceled = false;
        //TODO: Change
        object.sport = Sport.FUTSAL;

        setAppointmentToCreate(object);
    }

    function filterByDate(offset: number) {
        setDate(getCurrentDateInDynamoDbString(offset));
    }

    function filterByDuration(duration: number) {
        setDuration(+duration);
    }

    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const dayAfter = new Date(now.getTime() + 48 * 60 * 60 * 1000);

    const buttonColor = (bol: boolean) => {
        return bol ? 'yellow.20' : 'green.20';
    }

    const buttonText = (app) => {
        let text = app.start + " - " + app.end;
        return app.overlaping ? text + "*" : text;
    }

    const AppointmentButtons = () => {
        if (displayAppointments) {
            return (
                <Flex direction={"column"}>
                    <Grid templateColumns="1fr 1fr" gap={"1rem"} alignContent={"center"}>
                        {displayAppointments?.map((item, key) => (
                            <View key={key}>
                                <Button key={key} backgroundColor={buttonColor(item.overlaping)}
                                        color={"black"} onClick={() => openConfirm(item)}>{buttonText(item)}</Button>
                            </View>))}
                    </Grid>
                    <Text>*Za termine označene žuto već se skupljaju ekipe</Text>

                </Flex>
            )
        }
    }

    const AppointmentLoader = () => {
        if (!displayAppointments) {
            return (
                <Flex direction={"column"}>
                    <Text>Učitavam termine...</Text>
                    <Loader color={"green.90"} variation="linear"/>
                </Flex>
            )
        }
    }

    const ListAppointments = () => {
        if (!displayAppointments) {
            return;
        }
        if (!isOwner) {
            return;
        }
        if (reservedAppointments?.length === 0) {
            return <Heading>Nema rezerviranih termina...</Heading>
        }

        return (
            <Flex direction={"column"}>
                <Heading level={5}>Rezervirani termini:</Heading>
                {reservedAppointments?.sort(a => a.confirmed).map(a => <Button
                    onClick={() => navigate("/appointment/" + a.id)} backgroundColor={buttonColor(!a.confirmed)}
                    key={a.id}>{a.bookerName} - {getDateTimeFromAppointment(a)}</Button>)}
            </Flex>)

    };

    const DateAndDurationDropdowns = () => {
        if (!displayAppointments) {
            return;
        }
        return (
            <Flex>
                <SelectField label="Odaberi datum" onChange={(e) => filterByDate(e.target.value)}>
                    <option value={0}>{getDateInString(now)}</option>
                    <option value={1}>{getDateInString(tomorrow)}</option>
                    <option value={2}>{getDateInString(dayAfter)}</option>
                </SelectField>
                <SelectField label="Odaberi trajanje" onChange={(e) => filterByDuration(e.target.value)}>
                    <option value={60}>1:00h</option>
                    <option value={90}>1:30h</option>
                    <option value={120}>2:00h</option>
                </SelectField>
            </Flex>
        )
    };

    const AppointmentCreateView = () => {
        if (appointmentToCreate) {
            return <ConfirmAppointmentReservation isOwner={isOwner} appointment={appointmentToCreate}/>
        }

    };

    return (
        <Flex direction={"column"} margin={"10px"}>
            <Heading level={5}>Rezerviraj termin:</Heading>
            <AppointmentCreateView/>
            {DateAndDurationDropdowns()}
            <AppointmentLoader/>
            <AppointmentButtons/>
        </Flex>

    )
}

export default FreeAppointmentsView;
