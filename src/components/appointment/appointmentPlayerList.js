import React from "react";
import {FaTrash} from "react-icons/fa";
import {Flex, Heading} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Response} from "../../models";

import FigmaResponse from "../../figma-components/FigmaResponse";

const AppointmentPlayerList = ({user, responses, isOwner}) => {
    if (responses == null) {
        return;
    }

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

    const addAsFriend = (res) => {
        confirmAlert({
            title: 'Dodaj za prijatelja',
            message: 'Želite li dodati ' + res.playerName + ' za prijatelja?',
            buttons: [
                {
                    label: 'Da',
                    // onClick: () => DataStore.delete(Response, res.id).then(a => {
                    //     window.location.reload(false)
                    // })
                },
                {
                    label: 'Ne'
                }
            ]
        });
    };

    const mapResponseToComponent = (res) => {
        return (<Flex key={res.id} alignItems={"center"}>
            <FigmaResponse user={user} response={res}/>
            {/*<FaUserPlus onClick={() => addAsFriend(res)}/>*/}
            {isOwner && <FaTrash onClick={() => deleteResponse(res)} color={"darkred"}/>}
        </Flex>);
    };


    const renderResponses = responses && responses?.map(mapResponseToComponent);

    if (responses.length === 0) {
        return <Heading>Nema odgovora na ovaj termin</Heading>
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
            {renderResponses}
        </Flex>
    )


}

export default AppointmentPlayerList;
