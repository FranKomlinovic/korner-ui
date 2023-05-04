import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";

const AppointmentReservationForm = ({user, appointment, responseToUpdate}) => {
    const [name, setName] = useState();

    useEffect(() => {
        setName(user?.name);
    }, [user]);

    if (appointment?.canceled) {
        return;
    }
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
        DataStore.save(response);
    };

    function updateResponse(accepted) {
        DataStore.save(Response.copyOf(responseToUpdate, (item) => {
            item.accepted = accepted;
            item.playerPhoto = user?.photo
        }));
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
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                {responseToUpdate && alreadyAnsweredView()}
                {!responseToUpdate && createForm()}
            </Flex>


    )
}

export default AppointmentReservationForm;
