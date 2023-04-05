import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";

const UnauthorizedReservationForm = ({responses, appointmentId, functionTest}) => {
    const [name, setName] = useState();
    const [answered, setAnswered] = useState(false);

    const createResponse = (accepted) => {
        saveResp(accepted, name);
    };

    useEffect(() => {
        responses && name && setAnswered(responses.find((response) => response.playerName === name));
    }, [name, responses]);

    const saveResp = (accepted, nm) => {
        const response = new Response({
            accepted: accepted,
            appointmentID: appointmentId,
            playerName: nm,
        });

        DataStore.save(response).then((a) => {
            DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(a.appointmentID)]))
                .then((a) => functionTest(a));
        });
    }

    const createForm = () => {
        return (
            <Flex direction={"column"}>
                <TextField
                    label={"Ime i prezime"}
                    onChange={(a) => setName(a.currentTarget.value)}
                    defaultValue={""}
                />
                {!answered && <Flex>
                    <Button variation={"primary"} onClick={() => createResponse(true)}>
                        Dolazim
                    </Button>
                    <Button onClick={() => createResponse(false)} variation={"warning"}>
                        Ne Dolazim
                    </Button>
                </Flex>
                }
                {answered && <Flex>
                    <Heading>Već postoji odgovor s imenom {name}</Heading>
                </Flex>
                }
            </Flex>
        );
    }

    return (
        <Flex direction={"column"}>
            {createForm()}
        </Flex>

    )
}

export default UnauthorizedReservationForm;