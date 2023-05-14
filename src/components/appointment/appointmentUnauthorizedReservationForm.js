import React, {useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";

const AppointmentUnauthorizedReservationForm = ({responses, appointment}) => {
    const [name, setName] = useState();
    const [answered, setAnswered] = useState(false);

    const createResponse = (accepted) => {
        saveResp(accepted, name);
    };

    useEffect(() => {
        responses && name && setAnswered(responses.find((response) => response.playerName === name));
    }, [name, responses]);

    if (appointment?.canceled) {
        return;
    }
    const saveResp = (accepted, nm) => {
        const response = new Response({
            accepted: accepted,
            appointmentID: appointment.id,
            playerName: nm,
        });
        DataStore.save(response).then();
    }

    const createForm = () => {
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
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
        <Flex direction={"column"} alignContent={"center"}>
            {createForm()}
        </Flex>

    )
}

export default AppointmentUnauthorizedReservationForm;
