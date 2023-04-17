import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";

const ReservationForm = ({user, responses, appointmentId}) => {
    const [name, setName] = useState();
    const [responseToUpdate, setResponseToUpdate] = useState();

    useEffect(() => {
        setResponseToUpdate(responses?.find((response) => response.playerID === user?.sub));
    }, [responses, user]);

    useEffect(() => {
        setName(user?.name);
    }, [user]);

    const createResponse = (accepted) => {
        saveResp(accepted);
    };

    const saveResp = (accepted) => {
        const response = new Response({
            playerID: user?.sub,
            accepted: accepted,
            appointmentID: appointmentId,
            playerName: name,
            playerPhoto: user?.photo,
        });
        DataStore.save(response).then((a) => {

        });
    };

    function updateResponse(accepted) {
        DataStore.save(Response.copyOf(responseToUpdate, (item) => {
            item.accepted = accepted;
            item.playerPhoto = user?.photo
        })).then((a) => {
            setResponseToUpdate(a);
        });
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

    const createForm = () => {
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
        <Flex direction={"column"}>
            <Flex>
                {responseToUpdate && alreadyAnsweredView()}
                {!responseToUpdate && createForm()}
            </Flex>

        </Flex>

    )
}

export default ReservationForm;
