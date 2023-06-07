import React from "react";
import {Card, Flex} from "@aws-amplify/ui-react";
import AppointmentPlayerList from "../../components/appointment/appointmentPlayerList";
import AppointmentTeamsDnd from "../../components/appointment/appointmentTeamsDnd";
import AppointmentScore from "../../components/appointment/appointmentScore";

const PlayedAppointment = ({responses, teams, appointment, role}) => {


    return (
        <Flex direction="column">
            {teams?.length !== 0 && <Card variation={"elevated"} marginInline={"1rem"}>
                <AppointmentScore role={role} teams={teams}/>
            </Card>}
            <Card variation={"elevated"} marginInline={"1rem"}>
                {teams?.length !== 0 ? <AppointmentTeamsDnd resp={responses} tms={teams} appointmentID={appointment.id}
                                                            isOwner={role === "APPOINTMENT_OWNER"}/> :
                    <AppointmentPlayerList responses={responses} showDelete={role === "APPOINTMENT_OWNER"}/>}

            </Card>

        </Flex>
    )
        ;


}


export default PlayedAppointment;

