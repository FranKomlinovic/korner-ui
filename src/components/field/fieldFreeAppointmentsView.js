import React, {useEffect, useState} from "react";
import {Button, Card, Flex, Grid, Heading, SelectField, Text, View} from "@aws-amplify/ui-react";
import {getCurrentDateInDynamoDbString, getDateInStringFromOffset} from "../../functions/converters";
import {getAvailableAppointments} from "../../functions/lambdas";
import FieldConfirmAppointmentReservation from "./fieldConfirmAppointmentReservation";
import {Dialog} from "@mui/material";

const FieldFreeAppointmentsView = ({appointments, user, field, date, setDate}) => {
    const [duration, setDuration] = useState(60);
    const [displayAppointments, setDisplayAppointments] = useState();
    const [appointmentToCreate, setAppointmentToCreate] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setDisplayAppointments(getAvailableAppointments(appointments, date, duration, field));
    }, [date, duration, appointments, field]);

    useEffect(() => {
        setModalOpen(!!appointmentToCreate);
    }, [appointmentToCreate]);


    const DateAndDurationDropdowns = () => {
        return (
            <Flex justifyContent={"center"} marginTop={"1rem"}>
                <SelectField label="Odaberi datum"
                             onChange={(e) => setDate(getCurrentDateInDynamoDbString(e.target.value))}>
                    <option value={0}>{getDateInStringFromOffset(0)}</option>
                    <option value={1}>{getDateInStringFromOffset(1)}</option>
                    <option value={2}>{getDateInStringFromOffset(2)}</option>
                    <option value={3}>{getDateInStringFromOffset(3)}</option>
                    <option value={4}>{getDateInStringFromOffset(4)}</option>
                    <option value={5}>{getDateInStringFromOffset(5)}</option>
                    <option value={6}>{getDateInStringFromOffset(6)}</option>
                </SelectField>
                <SelectField label="Odaberi trajanje" onChange={(e) => setDuration(+e.target.value)}>
                    <option value={60}>1:00h</option>
                    <option value={90}>1:30h</option>
                    <option value={120}>2:00h</option>
                </SelectField>
            </Flex>
        )
    };

    const AppointmentButtons = () => {
        return (
            <Flex direction={"column"} marginTop={"1rem"}>
                <Grid rowGap={"0.5rem"} templateColumns={"1fr 1fr"} style={{
                    justifyItems: "center"
                }}>
                    {displayAppointments?.map((item, key) => (
                        <View key={key}>
                            <Button onClick={() => setAppointmentToCreate(item)}
                                    backgroundColor={item.overlapping ? "yellow.20" : "green.20"}>{item.start} - {item.end}</Button>
                        </View>))}
                </Grid>
                <Text>*Za termine označene žuto već se skupljaju ekipe</Text>
            </Flex>
        )
    }


    return (
        <Flex direction={"column"}>
            <Card variation={"elevated"}>
                <Heading level={4}>Rezerviraj termin:</Heading>
                <Dialog fullWidth open={modalOpen} onClose={() => setModalOpen(false)}>
                    <FieldConfirmAppointmentReservation appointment={appointmentToCreate} field={field} user={user}/>
                </Dialog>
                {DateAndDurationDropdowns()}
                {AppointmentButtons()}
            </Card>
        </Flex>

    )

}

export default FieldFreeAppointmentsView;
