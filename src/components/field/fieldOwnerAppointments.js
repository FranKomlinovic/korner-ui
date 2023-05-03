import React, {useEffect, useState} from "react";
import {Badge, Card, Flex, Heading, SelectField, Text, View, withAuthenticator} from "@aws-amplify/ui-react";
import {getCurrentDateInDynamoDbString, getDateInStringFromOffset} from "../../functions/converters";
import {useNavigate} from "react-router-dom";


const FieldOwnerAppointments = ({appointments}) => {
    const [displayAppointments, setDisplayAppointments] = useState();
    const [date, setDate] = useState(getCurrentDateInDynamoDbString(0));
    const navigate = useNavigate();

    // Gets all appointments from field
    useEffect(() => {
        setDisplayAppointments(appointments.sort((a, b) => a.start > b.start ? 1 : -1).filter(a => a.date === date && !a.canceled))
    }, [appointments, date]);

    const DateDropdown = () => {
        return (

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

        )
    };

    const AppointmentButtons = () => {
        return (
            <Flex marginTop={"10px"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                {displayAppointments?.length === 0 ? <Heading>Nema termina</Heading>
                    : displayAppointments?.map((item, key) => (
                        <View key={key}>
                            <Badge onClick={() => navigate("/appointment/" + item.id)}
                                   backgroundColor={item.confirmed ? "green.20" : "yellow.20"}><Heading>{item.bookerName} {item.start} - {item.end} {!item.confirmed ? "*" : ""}</Heading></Badge>
                        </View>))}
                <Text>*Termini označeni žuto još nisu potvrđeni</Text>

            </Flex>
        )
    }

    return (
        <Flex alignItems={"center"} direction={"column"}>
            <Card variation={"elevated"} width={"100%"}>
                <Heading level={4}>Termini:</Heading>
                {DateDropdown()}
                {AppointmentButtons()}
            </Card>
        </Flex>
    );


}


export default withAuthenticator(FieldOwnerAppointments);

