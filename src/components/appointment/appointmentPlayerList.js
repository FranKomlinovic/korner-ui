import React, {useEffect, useState} from "react";
import {Card, Flex, Heading} from "@aws-amplify/ui-react";
import 'react-confirm-alert/src/react-confirm-alert.css';

import FigmaResponse from "../../figma-components/FigmaResponse";

const AppointmentPlayerList = ({responses, showDelete}) => {
    const [toDisplay, setToDisplay] = useState();

    useEffect(() => {
        responses?.length > 0 ?
            setToDisplay(responses?.map(res => (
                <Card key={res.id} variation={"elevated"} padding={"0.2rem"}>
                    <FigmaResponse response={res} showDelete={showDelete}/>
                </Card>
            ))) : setToDisplay(<Heading>Nema odgovora za ovaj termin</Heading>)
    }, [responses, showDelete])

    const PlayersHeading = () => {
        const plus = responses?.filter(a => a.accepted).length
        const minus = responses?.filter(a => !a.accepted).length
        const numberOfResponses = `(${plus}/${plus + minus})`;
        return (
            <Flex>
                <Heading level={5}>Igrači: {numberOfResponses}</Heading>
            </Flex>
        )
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
