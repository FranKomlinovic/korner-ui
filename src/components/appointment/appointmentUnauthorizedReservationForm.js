import React, {useContext, useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";
import AlertContext from "../../context/alertContext";
import LoaderComponent from "../loaderComponent";
import AppointmentAlreadyAnweredView from "./appointmentAlreadyAnweredView";

const AppointmentUnauthorizedReservationForm = ({responses, appointment}) => {
    const [responseToUpdate, setResponseToUpdate] = useState();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState();
    const session = localStorage.getItem(appointment?.id);

    useEffect(() => {
        if (session) {
            setLoading(true)
            // setResponseToUpdate(responses?.find((response) => response.id === session))
            DataStore.query(Response, session).then(a => {
                setResponseToUpdate(a);
                setLoading(false)
            })
        }
    }, [session]);

    const alertContext = useContext(AlertContext);

    if (appointment?.locked) {
        return <Heading textAlign={"center"}>Organizator je ukinuo mogućnost odgovora na termin</Heading>
    }

    const createResponse = (accepted, name) => {
        if (responses?.find((response) => response.playerName === name)) {
            alertContext.error("Već postoji igrač s tim imenom, ako imate isto ime, dodaj nadimak")
        } else {
            setLoading(true)
            saveResp(accepted, name);
        }
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
            localStorage.setItem(a?.appointmentID, a?.id);
            setLoading(false);
        }).catch(() => {
            alertContext.error("Greška prihvaćanja termina, pokušajte ponovno")
        });
    }

    return (
        <Flex direction={"column"} alignContent={"center"}>
            {loading ? <LoaderComponent/> :
                responseToUpdate ?
                    <AppointmentAlreadyAnweredView appointment={appointment} updateResponseToUpdate={setResponseToUpdate} responseToUpdate={responseToUpdate}/> :
                    <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                        <TextField
                            label={"Ime i prezime"}
                            onChange={(a) => setName(a.currentTarget.value)}
                            defaultValue={""}
                        />
                        <Flex>
                            <Button isDisabled={!name} variation={"primary"} onClick={() => createResponse(true, name)}>
                                Dolazim
                            </Button>
                            <Button isDisabled={!name} onClick={() => createResponse(false, name)}
                                    variation={"warning"}>
                                Ne Dolazim
                            </Button>
                        </Flex>
                    </Flex>}
        </Flex>

    )
}

export default AppointmentUnauthorizedReservationForm;
