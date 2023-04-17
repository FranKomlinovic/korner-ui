import React from "react";
import {FaTrash, FaUserPlus} from "react-icons/fa";
import {Button, Flex, Heading} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Response} from "../../models";

import KornerResponseUserWrapper from "../wrappers/kornerResponseUserWrapper";

const ListUsersForAppointment = ({responses, isOwner}) => {
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
    };

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
            <KornerResponseUserWrapper response={res}/>
            {/*<FaUserPlus onClick={() => addAsFriend(res)}/>*/}
            {isOwner && <FaTrash onClick={() => deleteResponse(res)} color={"darkred"}/>}
        </Flex>);
    };


    const renderResponses = responses && responses?.map(mapResponseToComponent);

    if (responses.length === 0) {
        return <Heading>Nema odgovora na ovaj termin</Heading>
    }

    return (
        <Flex direction={"column"}>
            {renderResponses}
        </Flex>
    )


}

export default ListUsersForAppointment;
