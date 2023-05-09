import React, {useEffect, useState} from "react";
import {Card, Flex, Heading} from "@aws-amplify/ui-react";
import 'react-confirm-alert/src/react-confirm-alert.css';

import FigmaResponse from "../../figma-components/FigmaResponse";

const AppointmentPlayerList = ({user, responses, role, isLocked}) => {
    const [toDisplay, setToDisplay] = useState();

    useEffect(() => {
        setToDisplay(responses?.map(res => (
            <Card key={res.id} variation={"elevated"} padding={"0.2rem"}>
                <FigmaResponse user={user} response={res} showDelete={role === "APPOINTMENT_OWNER" && !isLocked}/>
            </Card>
        )))
    }, [responses, role, isLocked, user])

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
                {toDisplay}
            </Flex>
        </Flex>
    )


}

export default AppointmentPlayerList;
