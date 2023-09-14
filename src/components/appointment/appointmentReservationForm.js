import React, {useContext, useEffect, useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response, Team} from "../../models";
import {DataStore} from "aws-amplify";
import AlertContext from "../../context/alertContext";
import LoaderComponent from "../loaderComponent";
import AppointmentAlreadyAnweredView from "./appointmentAlreadyAnweredView";

const AppointmentReservationForm = ({user, appointment, responses}) => {
    const [name, setName] = useState();
    const [responseToUpdate, setResponseToUpdate] = useState();
    const [team, setTeam] = useState();
    const [loading, setLoading] = useState(false);
    const [responded, setResponded] = useState(false);
    const alertContext = useContext(AlertContext);

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
        setLoading(true)
        setResponded(true)
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
        DataStore.save(response).then(a => {
            setLoading(false);
            a.accepted ? alertContext.success("Prihvatili ste termin") :
                alertContext.warning("Odbili ste termin")
        }).catch(() => {
            alertContext.error("Greška prihvaćanja termina, pokušajte ponovno")
        });
    };

    const createForm = () => {
        if (appointment?.locked) {
            return <Heading textAlign={"center"}>Organizator je ukinuo mogućnost odgovora na termin</Heading>
        }
        return (
            loading ?
                <LoaderComponent/> :
                responded ?
                    <Flex>
                        <Heading>Odgovorili ste na termin</Heading>
                    </Flex>
                    :
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
            {responseToUpdate ? <AppointmentAlreadyAnweredView appointment={appointment} team={team}
                                                                updateResponseToUpdate={setResponseToUpdate} responseToUpdate={responseToUpdate}/> : createForm()}
        </Flex>


    )
}

export default AppointmentReservationForm;
