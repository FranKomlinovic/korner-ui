import React, {useEffect, useState} from "react";
import {Badge, Card, Flex, Heading, Text, View, withAuthenticator} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import {getDayAndDateFromAppointment} from "../../functions/converters";


const FieldOwnerAppointments = ({appointments, date}) => {
    const [displayAppointments, setDisplayAppointments] = useState();
    const navigate = useNavigate();

    // Gets all appointments from field
    useEffect(() => {
        setDisplayAppointments(appointments.sort((a, b) => a.start > b.start ? 1 : -1).filter(a => a.date === date && !a.canceled))
    }, [appointments, date]);

    const AppointmentButtons = () => {
        return (
            <Flex marginTop={"10px"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                {displayAppointments?.length === 0 ? <Heading>Nema termina</Heading>
                    : displayAppointments?.map((item, key) => (
                        <View key={key}>
                            <Badge onClick={() => navigate("/appointment/" + item.id)}
                                   backgroundColor={item.confirmed ? "green.20" : "yellow.20"}><Heading>{item.bookerName} {item.start} - {item.end} {!item.confirmed ? "*" : ""}</Heading></Badge>
                        </View>))}
                {displayAppointments?.filter(a => !a.confirmed).length !== 0 &&
                    <Text>*Termini označeni žuto još nisu potvrđeni</Text>}

            </Flex>
        )
    }

    return (
        <Flex direction={"column"} justifyContent={"space-around"}>
            <Card variation={"elevated"} marginInline={"1rem"}>
                <Heading level={4}>Rezervirano: </Heading>
                <Heading alignSelf={"center"} level={5}>{getDayAndDateFromAppointment(new Date(date))}</Heading>
                {AppointmentButtons()}
            </Card>
        </Flex>
    );


}


export default withAuthenticator(FieldOwnerAppointments);

