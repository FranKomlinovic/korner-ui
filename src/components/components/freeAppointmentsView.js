import {API} from "aws-amplify";
import React, {useEffect, useState} from "react";
import {Button, Flex, Grid, Heading, Loader, SelectField, Text, View} from "@aws-amplify/ui-react";
import {getCurrentDateInDynamoDbString, getDateInString} from "../converters";
import {Sport} from "../../models";
import ConfirmAppointmentReservation from "./confirmAppointmentReservation";

const FreeAppointmentsView = ({field, user, isOwner}) => {
    const [appointments, setAppointments] = useState([]);
    const [duration, setDuration] = useState(60);
    const [date, setDate] = useState(getCurrentDateInDynamoDbString(0));
    const [displayAppointments, setDisplayAppointments] = useState(null);
    const [appointmentToCreate, setAppointmentToCreate] = useState(null);

    useEffect(() => {
        field && API.get('availableAppointments', '/appointments/available/' + field.id).then(
            a => {
                setAppointments(a);
                setDisplayAppointments(a);
                setDisplayAppointments(a.filter(appointment => {

                    return appointment.date === getCurrentDateInDynamoDbString(0)
                        && appointment.duration === 60
                }));
            }
        )
    }, [field, user]);

    useEffect(() => {
        setDisplayAppointments(appointments.filter(appointment => {
            return appointment.date === date
                && appointment.duration === duration
        }));
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

    function setButtonColor(bol: boolean): string {
        if (bol) {
            return 'yellow.20';
        }
        return 'green.20';
    }

    function getButtonText(app): string {
        let text = app.start + " - " + app.end;
        if (app.overlaping) {
            return text + "*";
        }
        return text;

    }

    function getButtons(appointmentss) {
        if (appointmentss != null) {
            return <Grid templateColumns="1fr 1fr" gap={"1rem"} alignContent={"center"}>
                {appointmentss.map((item, key) => (
                    <View key={key}>
                        <Button key={key} backgroundColor={setButtonColor(item.overlaping)}
                                color={"black"} onClick={() => openConfirm(item)}

                        >{getButtonText(item)}</Button>
                    </View>))}
            </Grid>
        } else {
            return <Heading>Test</Heading>
        }
    }

    function loader() {
        if (displayAppointments === null || displayAppointments.length === 0) {
            //TODO rijesiti logiku (ak  je prazan mozda je stvarno prazan)
            return <Flex direction={"column"}>
                <Text>Učitavam slobodne termine...</Text>
                <Loader variation="linear"/>

            </Flex>
        }
    }

    return (
        <Flex direction={"column"} margin={"10px"}>
            <Heading level={5}>Rezerviraj termin:</Heading>
            {appointmentToCreate != null && field != null &&
                <ConfirmAppointmentReservation isOwner={isOwner} appointment={appointmentToCreate}/>}

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
            {loader()}
            {getButtons(displayAppointments)}
            <Text>*Za termine označene žuto već se skupljaju ekipe</Text>


        </Flex>

    )
}

export default FreeAppointmentsView;
