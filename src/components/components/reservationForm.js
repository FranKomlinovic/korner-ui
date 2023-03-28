import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";

const ReservationForm = ({userId, userName, responses, appointmentId, functionTest}) => {
    const [name, setName] = useState();
    const [responseToUpdate, setResponseToUpdate] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            if (responses !== null) {
                setResponseToUpdate(responses.find((response) => response.playerID === userId));
            }
            setName(userName)
        };
        fetchData();
    }, [responses, userId, userName]);

    if (responses === null || userId === null || userName === null || appointmentId === null) {
        return;
    }


    const createResponse = (reserve, accepted) => {
        saveResp(reserve, accepted, name, userId);
    };

    const saveResp = (reserve, accepted, nm, playerId) => {
        const response = new Response({
            playerID: playerId,
            accepted: accepted,
            reserve: reserve,
            appointmentID: appointmentId,
            playerName: nm,
        });
        DataStore.save(response).then((a) => {
            DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(a.appointmentID)]))
                .then((a) => functionTest(a));
        });
    };

    const updateResponse = (accepted, reserve) => {
        DataStore.save(Response.copyOf(responseToUpdate, (item) => {
            item.accepted = accepted;
            item.reserve = reserve;
        })).then((a) => {
            DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(a.appointmentID)]))
                .then((a) => functionTest(a));
        });
    };

    const commingButton = (
        <Button size={"small"} onClick={() => updateResponse(true, false)} variation={"primary"}>
            Ipak dolazim
        </Button>
    )

    const commingAsReserve = (
        <Button size={"small"} onClick={() => updateResponse(true, true)}>
            Dolazim ako fali
        </Button>
    )

    const notComming = (
        <Button size={"small"} onClick={() => updateResponse(false, false)} variation={"warning"}>
            Ipak ne mogu doći
        </Button>
    )

    const alreadyAnsweredView = () => {
        if (responseToUpdate.accepted) {
            if (responseToUpdate.reserve) {
                return (
                    <Flex alignItems={"center"} direction={"column"}>
                        <Heading level={3}>Dolazite ako fali</Heading>
                        <Heading level={6}>Promijeni odgovor:</Heading>
                        <Flex>
                            {commingButton}
                            {notComming}
                        </Flex>
                    </Flex>);
            }
            return (
                <Flex alignItems={"center"} direction={"column"}>
                    <Heading color={"green"} level={3}>Dolazite</Heading>
                    <Flex alignItems={"center"} justifyContent={"center"}>
                        <Heading level={6}>Promijeni odgovor:</Heading>
                        {commingAsReserve}
                        {notComming}
                    </Flex>
                </Flex>);
        } else {
            return (
                <Flex alignItems={"center"} direction={"column"}>
                    <Heading color={"red"} level={3}>Odbili ste termin</Heading>
                    <Heading level={6}>Promijeni odgovor:</Heading>
                    <Flex>
                        {commingButton}
                        {commingAsReserve}
                    </Flex>
                </Flex>
            );
        }
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
                    <Button variation={"primary"} onClick={() => createResponse(false, true)}>
                        Dolazim
                    </Button>
                    <Button onClick={() => createResponse(true, true)}>Ako fali</Button>
                    <Button onClick={() => createResponse(false, false)} variation={"warning"}>
                        Ne Dolazim
                    </Button>
                </Flex>
            </Flex>
        );
    }

    return (
        <Flex direction={"column"}>
                <Heading level={5}>Vaš odgovor:</Heading>
            <Flex>
                {responseToUpdate && alreadyAnsweredView()}
                {!responseToUpdate && createForm(userName)}
            </Flex>

        </Flex>

    )
}

export default ReservationForm;
