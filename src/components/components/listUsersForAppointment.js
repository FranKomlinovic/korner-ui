import React from "react";
import {getTimeFromTimestamp} from "../converters";
import {FaCheck, FaCheckCircle, FaMinus} from "react-icons/fa";
import {KornerResponseUser} from "../../ui-components";
import {Flex, Heading} from "@aws-amplify/ui-react";

const ListUsersForAppointment = ({responses}) => {
    if (responses == null) {
        return;
    }

    const mapResponseToComponent = (res) => {
        const time = getTimeFromTimestamp(res.updatedAt);
        let icon = <FaMinus/>;
        if (res.accepted) {
            icon = res.reserve ? <FaCheckCircle/> : <FaCheck/>;
        }
        return <KornerResponseUser name={res.playerName} time={time} icon={icon} id={res.id}/>;
    };


    const renderResponses = responses && responses.map(mapResponseToComponent);


    return (
        <Flex direction={"column"}>
            <Heading level={5}>Igrači:</Heading>
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
