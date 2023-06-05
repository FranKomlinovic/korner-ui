import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, Text, TextField} from "@aws-amplify/ui-react";
import {Response, Team} from "../../models";
import {DataStore} from "aws-amplify";
import {FaTshirt} from "react-icons/fa";

const AppointmentReservationForm = ({user, appointment, responses}) => {
    const [name, setName] = useState();
    const [responseToUpdate, setResponseToUpdate] = useState();
    const [team, setTeam] = useState();


    useEffect(() => {
        setName(user?.name);
    }, [user]);

    useEffect(() => {
        setResponseToUpdate(responses?.find((response) => response.playerID === user?.sub));
    }, [responses, user]);

    useEffect(() => {
        responseToUpdate?.teamID &&
        DataStore.query(Team, responseToUpdate?.teamID).then(a => {
            setTeam(a)
        })
    }, [responseToUpdate?.teamID]);


    const createResponse = (accepted) => {
        saveResp(accepted);
    };

    const saveResp = (accepted) => {
        const response = new Response({
            playerID: user?.sub,
            accepted: accepted,
            appointmentID: appointment.id,
            playerName: name,
            playerPhoto: user?.photo,
        });
        DataStore.save(response)
    };

    function updateResponse(accepted) {
        DataStore.save(Response.copyOf(responseToUpdate, (item) => {
            item.team = undefined;
            item.accepted = accepted;
            item.playerPhoto = user?.photo
        }))
    }

    const commingButton = (
        <Button size={"small"} onClick={() => updateResponse(true)} variation={"primary"}>
            Dolazim
        </Button>
    )

    const notComming = (
        <Button size={"small"} onClick={() => updateResponse(false)} variation={"warning"}>
            Ne dolazim
        </Button>
    )

    const alreadyAnsweredView = () => {

        if (responseToUpdate?.accepted) {
            if (team) {
                return (<Flex alignItems={"center"} justifyContent={"center"}>

                    <Heading>Ekipa:</Heading>
                    <FaTshirt size={"4rem"} color={team?.color}/>
                    <Heading level={2}>{team?.name}</Heading>

                </Flex>)
            }
            return (
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                    <Heading color={"green.80"} level={3}>Dolazim</Heading>
                    {!appointment?.locked &&
                        <Heading level={6}>Promijeni odgovor:</Heading>}
                    <Flex>
                        {!appointment?.locked ? notComming :
                            <Text textAlign={"center"}>Odgovori su zaključani, za promjenu
                                kontaktirajte organizatora: {appointment?.bookerName}</Text>}
                    </Flex>
                </Flex>
            );
        }
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <Heading color={"font.warning"} level={3}>Ne dolazim</Heading>
                {!appointment?.locked && <Heading level={6}>Promijeni odgovor:</Heading>}
                <Flex>
                    {!appointment?.locked ? commingButton :
                        <Text textAlign={"center"}>Odgovori su zaključani, za promjenu
                            kontaktirajte organizatora: {appointment?.bookerName}</Text>}
                </Flex>
            </Flex>
        );

    }

    const createForm = () => {
        if (appointment?.locked) {
            return <Heading textAlign={"center"}>Organizator je ukinuo mogućnost odgovora na termin</Heading>
        }
        return (
            <Flex direction={"column"}>
                <TextField
                    label={"Ime i prezime"}
                    onChange={(a) => setName(a.currentTarget.value)}
                    defaultValue={user?.name}
                />
                <Flex>
                    <Button variation={"primary"} onClick={() => createResponse(true)}>
                        Dolazim
                    </Button>
                    <Button onClick={() => createResponse(false)} variation={"warning"}>
                        Ne Dolazim
                    </Button>
                </Flex>
            </Flex>
        );
    }

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {responseToUpdate ? alreadyAnsweredView() : createForm()}
        </Flex>


    )
}

export default AppointmentReservationForm;
