import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";

const ReservationForm = ({userId, userName, responses, appointmentId, functionTest, userPhoto}) => {
    const [name, setName] = useState();
    const [responseToUpdate, setResponseToUpdate] = useState();

    useEffect(() => {
        responses && userId && setResponseToUpdate(responses.find((response) => response.playerID === userId));
    }, [responses, userId]);

    useEffect(() => {
        userName && setName(userName);
    }, [userName]);

    const createResponse = (accepted) => {
        saveResp(accepted, name, userId);
    };

    const saveResp = (accepted, nm, playerId) => {
        const response = new Response({
            playerID: playerId,
            accepted: accepted,
            appointmentID: appointmentId,
            playerName: nm,
            playerPhoto: userPhoto,
        });
        DataStore.save(response).then((a) => {
            DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(a.appointmentID)]))
                .then((a) => functionTest(a));
        });
    };

    const updateResponse = (accepted) => {
        DataStore.save(Response.copyOf(responseToUpdate, (item) => {
            item.accepted = accepted;
        })).then((a) => {
            DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(a.appointmentID)]))
                .then((a) => functionTest(a));
        });
    };

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
        if (responseToUpdate.accepted) {
            return (
                <Flex alignItems={"center"} direction={"column"}>
                    <Heading color={"green"} level={3}>Dolazim</Heading>
                    <Heading level={6}>Promijeni odgovor:</Heading>
                    <Flex>
                        {notComming}
                    </Flex>
                </Flex>
            );
        }
        return (
            <Flex alignItems={"center"} direction={"column"}>
                <Heading color={"red"} level={3}>Ne dolazim</Heading>
                <Heading level={6}>Promijeni odgovor:</Heading>
                <Flex>
                    {commingButton}
                </Flex>
            </Flex>
        );

    }

    const createForm = (defaultValue) => {
        return (
            <Flex direction={"column"}>
                <TextField
                    label={"Ime i prezime"}
                    onChange={(a) => setName(a.currentTarget.value)}
                    defaultValue={defaultValue}
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
        <Flex direction={"column"}>
            <Flex>
                {responseToUpdate && alreadyAnsweredView()}
                {!responseToUpdate && createForm(userName)}
            </Flex>

        </Flex>

    )
}

export default ReservationForm;
