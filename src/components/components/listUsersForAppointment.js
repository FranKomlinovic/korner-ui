import React from "react";
import {getTimeFromTimestamp} from "../converters";
import {FaCheck, FaCheckCircle, FaMinus, FaTrash} from "react-icons/fa";
import {KornerResponseUser} from "../../ui-components";
import {Flex, Heading} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ListUsersForAppointment = ({responses}) => {
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
            icon = res.reserve ? <FaCheckCircle/> : <FaCheck/>;
        }
        return (<Flex alignItems={"center"}>
            <KornerResponseUser name={res.playerName} time={time} icon={icon} id={res.id}/>
            <FaTrash onClick={() => deleteResponse(res)} color={"darkred"}/>
        </Flex>);
    };


    const renderResponses = responses && responses.map(mapResponseToComponent);

    if (responses.length === 0) {
        return <Heading>Nema odgovora na ovaj termin</Heading>
    }

    return (
        <Flex direction={"column"}>
            {renderResponses}
            <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                <Flex alignItems={"center"} gap={"0.2rem"}>
                    <FaCheck/>
                    <Heading>Dolazi</Heading>
                </Flex>

                <Flex alignItems={"center"} gap={"0.2rem"}>
                    <FaMinus/>
                    <Heading>Ne dolazi</Heading>
                </Flex>
            </Flex>
        </Flex>
    )


}

export default ListUsersForAppointment;
