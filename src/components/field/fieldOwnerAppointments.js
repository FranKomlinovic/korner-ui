import React, {useEffect, useState} from "react";
import {Button, Card, Flex, Heading, Text, View, withAuthenticator} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import {getDayAndDateFromAppointment, getDayOfWeek} from "../../functions/converters";


const FieldOwnerAppointments = ({appointments, date, recurringAppointments}) => {
    const [displayAppointments, setDisplayAppointments] = useState();
    const [recAppointments, setRecAppointments] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setDisplayAppointments(appointments.sort((a, b) => a.start > b.start ? 1 : -1).filter(a => a.date === date && !a.canceled))
    }, [appointments, date]);

    useEffect(() => {
        console.log(recurringAppointments)
        if (recurringAppointments) {
            setRecAppointments(Object.entries(
                // What you have done
                recurringAppointments?.reduce((acc, reccApp) => {
                    const day = getDayOfWeek(new Date(reccApp.startDate))

                    // Group initialization
                    if (!acc[day]) {
                        acc[day] = [];
                    }

                    // Grouping
                    // FIX: only pushing the object that contains id and value
                    acc[day].push(reccApp);

                    return acc;
                }, {})
            ).map(([label, options]) => ({label, options})));

        }
    }, [recurringAppointments]);


    const AppointmentButtons = () => {
        return (
            <Flex marginTop={"10px"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                {displayAppointments?.length === 0 ? <Heading>Nema termina</Heading>
                    : displayAppointments?.map((item, key) => (
                        <View key={key}>
                            <Button onClick={() => navigate("/appointment/" + item.id)}
                                    backgroundColor={item.confirmed ? "brand.primary.80" : "brand.secondary.80"}><Heading
                                color={"white"}>{item.bookerName} {item.start} - {item.end} {!item.confirmed ? "*" : ""}</Heading></Button>
                        </View>))}
                {displayAppointments?.filter(a => !a.confirmed).length !== 0 &&
                    <Text>*Termini označeni žuto još nisu potvrđeni</Text>}

            </Flex>
        )
    }

    const RecurringAppointments = () => {
        return (
            <Flex gap={"0.5rem"} marginTop={"10px"} direction={"column"} alignItems={"center"}
                  justifyContent={"center"}>
                {recAppointments?.length === 0 ? <Heading>Nema termina</Heading>
                    : recAppointments?.map(item => (
                        <Flex alignItems={"stretch"} direction={"column"} key={item.label}>
                            <Heading>{item.label}:</Heading>
                            {item.options.map((b, key) => (
                                <Button key={key} variation={"primary"}
                                        onClick={() => navigate("/recurring/" + b.id)}>
                                    <Flex width={"100%"}>
                                        <Heading color={"white"}>{b.start} - {b.end}</Heading>
                                        <Heading color={"white"}>  {b.bookerName}</Heading>
                                    </Flex>
                                </Button>
                            ))}

                        </Flex>))}
            </Flex>
        )
    }

    return (
        <Flex direction={"column"} justifyContent={"space-around"}>
            <Card variation={"elevated"} marginInline={"1rem"}>
                <Heading level={4}>Rezervirano: </Heading>
                <Heading alignSelf={"center"} level={5}>{getDayAndDateFromAppointment(date)}</Heading>
                {AppointmentButtons()}
            </Card>
            <Card variation={"elevated"} marginInline={"1rem"}>
                <Heading level={4}>Stalni termini: </Heading>
                {RecurringAppointments()}
            </Card>
        </Flex>
    );


}


export default withAuthenticator(FieldOwnerAppointments);

