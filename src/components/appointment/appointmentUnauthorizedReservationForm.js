import React, {useContext, useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";
import AlertContext from "../../context/alertContext";

const AppointmentUnauthorizedReservationForm = ({responses, appointment}) => {
    const [name, setName] = useState();
    const [answered, setAnswered] = useState(false);
    const alertContext = useContext(AlertContext);
    useEffect(() => {
        responses && name && setAnswered(responses.find((response) => response.playerName === name));
    }, [name, responses]);

    if (appointment?.locked) {
        return <Heading textAlign={"center"}>Organizator je ukinuo mogućnost odgovora na termin</Heading>
    }
    const createResponse = (accepted) => {
        saveResp(accepted, name);
    };

    const saveResp = (accepted, nm) => {
        const response = new Response({
            accepted: accepted,
            appointmentID: appointment.id,
            playerName: nm,
        });
        DataStore.save(response).then(a => {
            a.accepted ? alertContext.success("Prihvatili ste termin") :
                alertContext.warning("Odbili ste termin")
        }).catch(() => {
            alertContext.error("Greška prihvaćanja termina, pokušajte ponovno")
        });
    }


    const createForm = () => {
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <TextField
                    label={"Ime i prezime"}
                    onChange={(a) => setName(a.currentTarget.value)}
                    defaultValue={""}
                />
                {answered ? <Flex>
                        <Heading>Već postoji odgovor s imenom {name}</Heading>
                    </Flex>
                    : <Flex>
                        <Button isDisabled={!name} variation={"primary"} onClick={() => createResponse(true)}>
                            Dolazim
                        </Button>
                        <Button isDisabled={!name} onClick={() => createResponse(false)} variation={"warning"}>
                            Ne Dolazim
                        </Button>
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
