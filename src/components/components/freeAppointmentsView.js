import {API, Auth} from "aws-amplify";
import React, {useEffect, useState} from "react";
import {Button, Flex, Grid, Heading, Loader, SelectField, Text, View} from "@aws-amplify/ui-react";
import {getCurrentDateInDynamoDbString, getDateInString} from "../converters";
import {Sport} from "../../models";
import ConfirmAppointmentReservation from "./confirmAppointmentReservation";

const FreeAppointmentsView = (field) => {
    const [appointments, setAppointments] = useState([]);
    const [duration, setDuration] = useState(60);
    const [date, setDate] = useState(getCurrentDateInDynamoDbString(0));
    const [displayAppointments, setDisplayAppointments] = useState(null);
    const [appointmentToCreate, setAppointmentToCreate] = useState(null);
    const [user, setUser] = useState(null);


    useEffect(() => {
        API.get('availableAppointments', '/appointments/available/' + field.field.id).then(
            a => {
                setAppointments(a);
                setDisplayAppointments(a);
                setDisplayAppointments(a.filter(appointment => {

                    return appointment.date === getCurrentDateInDynamoDbString(0)
                        && appointment.duration === 60
                }));
            }
        )

        Auth.currentSession().then(usr => {
            setUser(usr.getIdToken().payload);
        });
    }, [field.field]);

    useEffect(() => {
        setDisplayAppointments(appointments.filter(appointment => {
            return appointment.date === date
                && appointment.duration === duration
        }));
    }, [date, duration]);

    function openConfirm(object) {
        object.bookerName = user.given_name + ' ' + user.family_name;
        object.bookerID = user.sub;
        object.fieldsID = field.field.id;
        object.fieldName = field.field.name;
        object.fieldPhoto = field.field.photo;
        object.confirmed = false;
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
            return 'warning';
        }
        return 'default';
    }

    function getButtons(appointmentss) {
        if (appointmentss != null) {
            return <Grid templateColumns="1fr 1fr" alignContent={"center"}>
                {appointmentss.map((item, key) => (
                    <View>
                        <Button key={key} variation={setButtonColor(item.overlaping)}
                                onClick={() => openConfirm(item)}

                        >{item.start} - {item.end}</Button>
                    </View>))}
            </Grid>
        } else {
            return <Heading>Test</Heading>
        }
    }

    function loader() {
        if (displayAppointments === null || displayAppointments.length === 0) {
            //TODO rijesiti logiku (ak  je prazan mozda je stvarno prazan)
            return<Flex direction={"column"}>
                <Text>Učitavam slobodne termine...</Text>
                <Loader variation="linear"/>;

            </Flex>
        }
    }

    return (
        <Flex direction={"column"}>
            <Heading level={5}>Rezerviraj termin:</Heading>
            {appointmentToCreate != null && field != null &&
                <ConfirmAppointmentReservation appointment={appointmentToCreate}/>}

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


        </Flex>

    )
}

export default FreeAppointmentsView;
