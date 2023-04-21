import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";
import {PubSub} from "@aws-amplify/pubsub";

const ReservationForm = ({user, appointmentId, responseToUpdate}) => {
    const [name, setName] = useState();

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
            const response = a.accepted ? "DOLAZI" : "NE DOLAZI"
            const message = `${a.playerName} ${response} na termin`
            PubSub.publish(appointmentId, message)
        });
    };

    function updateResponse(accepted) {
        DataStore.save(Response.copyOf(responseToUpdate, (item) => {
            item.accepted = accepted;
            item.playerPhoto = user?.photo
        })).then((a) => {
            const response = a.accepted ? "DOLAZIM" : "NE DOLAZIM"
            const message = `${a.playerName} promijenio je odgovor u ${response}`
            PubSub.publish(appointmentId, message)
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
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <Heading color={"green"} level={3}>Dolazim</Heading>
                    <Heading level={6}>Promijeni odgovor:</Heading>
                    <Flex>
                        {notComming}
                    </Flex>
                </Flex>
            );
        }
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
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
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {responseToUpdate && alreadyAnsweredView()}
                {!responseToUpdate && createForm()}
            </Flex>

        </Flex>

    )
}

export default ReservationForm;
