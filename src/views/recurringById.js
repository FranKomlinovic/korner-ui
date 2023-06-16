import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {DataStore} from "aws-amplify";
import {Appointment, ReccuringAppointment} from "../models";
import {Button, Card, Flex, Heading, TabItem, Tabs} from "@aws-amplify/ui-react";
import {getCurrentDateInDynamoDbString, getDateInDdMmYyyy, getDayOfWeek} from "../functions/converters";
import {confirmAlert} from "react-confirm-alert";


const RecurringById = () => {
    const {recurringId} = useParams();
    const navigate = useNavigate();
    const [recurringAppointment, setRecurringAppointment] = useState()
    const [upcomingAppointments, setUpcomingAppointments] = useState()
    const [playedAppointments, setPlayedAppointments] = useState()

    useEffect(() => {
        DataStore.query(ReccuringAppointment, recurringId).then(a => {
            setRecurringAppointment(a)
        })
    }, [recurringId])

    useEffect(() => {
        recurringAppointment?.Appointments.toArray().then(a => {
            const sortedAppointments = a.sort((a, b) => a.date > b.date ? 1 : -1);
            setUpcomingAppointments(sortedAppointments.filter(a => a.date > getCurrentDateInDynamoDbString(0)))
            setPlayedAppointments(sortedAppointments.filter(a => a.date <= getCurrentDateInDynamoDbString(0)))
        })
    }, [recurringAppointment])

    const deleteRecurringAppointment = () => {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati stalni termin i sve njegove buduće termine?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => {
                        DataStore.save(ReccuringAppointment.copyOf(recurringAppointment, a => {
                            a.canceled = true;
                            a.endDate = getCurrentDateInDynamoDbString(0)
                        })).then(a => {
                            navigate("/fields/" + recurringAppointment?.fieldsID)
                        });
                        for (let a of upcomingAppointments) {
                            DataStore.delete(Appointment, a.id);
                        }
                    }
                },
                {
                    label: 'Ne'
                }
            ]
        });
    }


    return (
        <Flex margin={"2rem"} direction={"column"}>
            <Heading level={2}>{recurringAppointment?.bookerName}</Heading>
            <Heading
                level={4}>{getDayOfWeek(new Date(recurringAppointment?.startDate))} {recurringAppointment?.start} - {recurringAppointment?.end}</Heading>
            <Heading
                level={4}>{getDateInDdMmYyyy(recurringAppointment?.startDate)} - {getDateInDdMmYyyy(recurringAppointment?.endDate)}</Heading>

            <Button onClick={deleteRecurringAppointment} variation={"destructive"}>Obriši stalni termin</Button>
            <Card variation={"elevated"}>
                <Heading level={4}>Termini:</Heading>

                <Tabs gap={"0.5rem"}>
                    <TabItem title={"Odigrani"}>
                        <Flex direction={"column"}>
                            {playedAppointments?.map(a => (
                                    <Button onClick={() => navigate('/appointment/' + a.id)} variation={"primary"}
                                            level={5}>{getDateInDdMmYyyy(a?.date)}</Button>
                                )
                            )}
                        </Flex>
                    </TabItem>
                    <TabItem title={"Budući"}>
                        <Flex direction={"column"}>
                            {upcomingAppointments?.map(a => (
                                    <Button onClick={() => navigate('/appointment/' + a.id)} variation={"primary"}
                                            level={5}>{getDateInDdMmYyyy(a?.date)}</Button>
                                )
                            )}
                        </Flex>
                    </TabItem>
                </Tabs>


            </Card>

        </Flex>)
        ;
}


export default RecurringById;

