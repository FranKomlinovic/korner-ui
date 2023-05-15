import React from "react";
import {Card, Flex} from "@aws-amplify/ui-react";
import AppointmentPlayerList from "../../components/appointment/appointmentPlayerList";

const PlayedAppointment = ({responses}) => {

    return (
        <Flex direction="column">
            <Card variation={"elevated"} marginInline={"1rem"}>
                <AppointmentPlayerList responses={responses} showDelete={false}/>
            </Card>

        </Flex>
    )
        ;


}


export default PlayedAppointment;

