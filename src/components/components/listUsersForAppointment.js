import React from "react";
import {getTimeFromTimestamp} from "../converters";
import {FaMinus, FaPlus, FaTrash} from "react-icons/fa";
import {KornerResponseUser} from "../../ui-components";
import {Flex, Heading} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ListUsersForAppointment = ({responses, isOwner}) => {
    if (responses == null) {
        return;
    }

    const deleteResponse = (res) => {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati odgovor korisnika ' + res.playerName + '?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => DataStore.delete(res)
                },
                {
                    label: 'Ne'
                }
            ]
        });
    };

    const mapResponseToComponent = (res) => {
        const time = getTimeFromTimestamp(res.updatedAt);
        let icon = <FaMinus/>;
        if (res.accepted) {
            icon = <FaPlus/>
        }
        return (<Flex alignItems={"center"}>
            <KornerResponseUser name={res.playerName} time={time} icon={icon} id={res.id}/>
            {isOwner && <FaTrash onClick={() => deleteResponse(res)} color={"darkred"}/>}
        </Flex>);
    };


    const renderResponses = responses && responses.map(mapResponseToComponent);

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
