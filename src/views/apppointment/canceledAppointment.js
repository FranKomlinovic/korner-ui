import React from "react";
import {Card, Flex} from "@aws-amplify/ui-react";
import AppointmentPlayerList from "../../components/appointment/appointmentPlayerList";

const CanceledAppointment = ({responses}) => {

    return (
        <Flex direction="column">
            <Card variation={"elevated"} marginInline={"1rem"}>
                <AppointmentPlayerList responses={responses} showDelete={false}/>
            </Card>

        </Flex>
    );
}


export default CanceledAppointment;

