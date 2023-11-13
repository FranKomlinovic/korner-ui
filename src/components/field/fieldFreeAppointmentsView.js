import React, {useEffect, useState} from "react";
import {Button, Card, Flex, Grid, Heading, SelectField, SwitchField, Text, View} from "@aws-amplify/ui-react";
import {getCurrentDateInDynamoDbString, getDateInStringFromOffset} from "../../functions/converters";
import {getAvailableAppointments2} from "../../functions/lambdas";
import FieldConfirmAppointmentReservation from "./fieldConfirmAppointmentReservation";
import {Dialog} from "@mui/material";
import {FaCalendarPlus, FaEye} from "react-icons/fa";

const FieldFreeAppointmentsView = ({appointments, user, field, date, setDate, possibleAppointments}) => {
    const [duration, setDuration] = useState("HOUR");
    const [displayAppointments, setDisplayAppointments] = useState();
    const [appointmentToCreate, setAppointmentToCreate] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [showAppointments, setShowAppointments] = useState(true);

    useEffect(() => {
        setDisplayAppointments(getAvailableAppointments2(possibleAppointments, date, duration, appointments));
    }, [possibleAppointments, date, duration, appointments]);

    useEffect(() => {
        setModalOpen(!!appointmentToCreate);
    }, [appointmentToCreate]);


    const DateAndDurationDropdowns = () => {
        return (
            <Flex justifyContent={"center"} marginTop={"1rem"}>
                <SelectField size={"small"} label="Odaberi datum"
                             onChange={(e) => setDate(getCurrentDateInDynamoDbString(e.target.value))}>
                    <option value={0}>{getDateInStringFromOffset(0)}</option>
                    <option value={1}>{getDateInStringFromOffset(1)}</option>
                    <option value={2}>{getDateInStringFromOffset(2)}</option>
                    <option value={3}>{getDateInStringFromOffset(3)}</option>
                    <option value={4}>{getDateInStringFromOffset(4)}</option>
                    <option value={5}>{getDateInStringFromOffset(5)}</option>
                    <option value={6}>{getDateInStringFromOffset(6)}</option>
                </SelectField>
                <SelectField size={"small"} label="Odaberi trajanje" onChange={(e) => setDuration(e.target.value)}>
                    <option value={"HOUR"}>1:00h</option>
                    <option value={"HOUR_AND_HALF"}>1:30h</option>
                    <option value={"TWO_HOURS"}>2:00h</option>
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
                                    color={"white"}
                                    backgroundColor={item.overlapping ? "brand.secondary.80" : "brand.primary.80"}>{item.start} - {item.end}</Button>
                        </View>))}
                </Grid>
                <Text>*Za termine označene žuto već se skupljaju ekipe</Text>
            </Flex>
        )
    }


    return (
        <Flex direction={"column"}>
            <Card marginInline={"1rem"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <FaCalendarPlus onClick={() => setShowAppointments(!showAppointments)} size={"1.5rem"}/>
                    <Heading level={5}>Rezerviraj termin</Heading>
                    <SwitchField
                        size={"large"}
                        label={<Flex><FaEye/></Flex>}
                        isChecked={showAppointments}
                        onChange={(e) => {
                            setShowAppointments(e.target.checked);
                        }}
                    />
                </Flex>
                <Dialog fullWidth open={modalOpen} onClose={() => setModalOpen(false)}>
                    <FieldConfirmAppointmentReservation onCreateFunction={() => setModalOpen(false)}
                                                        appointment={appointmentToCreate} field={field} user={user}/>
                </Dialog>
                {showAppointments && <Flex direction={"column"}>
                    {DateAndDurationDropdowns()}
                    {AppointmentButtons()}
                </Flex>
                }

            </Card>
        </Flex>

    )

}

export default FieldFreeAppointmentsView;
