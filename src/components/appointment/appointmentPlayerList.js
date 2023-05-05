import React from "react";
import {FaTrash} from "react-icons/fa";
import {Card, Flex, Heading} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Response} from "../../models";

import FigmaResponse from "../../figma-components/FigmaResponse";

const AppointmentPlayerList = ({user, responses, role, isLocked}) => {

    function deleteResponse(res) {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati odgovor korisnika ' + res.playerName + '?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => DataStore.delete(Response, res.id)
                },
                {
                    label: 'Ne'
                }
            ]
        });
    }

    const mapResponseToComponent = (res) => {
        return (
            <Card key={res.id} variation={"elevated"} padding={"0.2rem"}>
                <Flex alignItems={"center"} gap={"0px"} paddingRight={"0.5rem"}>
                    <FigmaResponse user={user} response={res}/>
                    {role === "APPOINTMENT_OWNER" && !isLocked && <FaTrash onClick={() => deleteResponse(res)} color={"darkred"}/>}
                </Flex>
            </Card>
        );
    };


    const renderResponses = responses && responses?.map(mapResponseToComponent);

    if (responses?.length === 0) {
        return <Heading>Nema odgovora za ovaj termin</Heading>
    }

    const PlayersHeading = () => {
        const plus = responses?.filter(a => a.accepted).length
        const minus = responses?.filter(a => !a.accepted).length
        const numberOfResponses = `(${plus}/${plus + minus})`;
        return (<Heading level={5}>Igrači: {numberOfResponses}</Heading>)
    }

    return (
        <Flex direction={"column"}>
            <PlayersHeading/>
            <Flex direction={"column"} gap={"0.2rem"}>
                {renderResponses}

            </Flex>
        </Flex>
    )


}

export default AppointmentPlayerList;
