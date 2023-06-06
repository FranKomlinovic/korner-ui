import React from "react";
import {Card, Flex, Heading} from "@aws-amplify/ui-react";
import AppointmentPlayerList from "../../components/appointment/appointmentPlayerList";
import AppointmentTeamsDnd from "../../components/appointment/appointmentTeamsDnd";
import {FaMedal, FaTshirt} from "react-icons/fa";

const PlayedAppointment = ({responses, teams, appointment, role}) => {

    const medalColors = ["gold", "silver", "bronze"]
    return (
        <Flex direction="column">
            <Card variation={"elevated"} marginInline={"1rem"}>
                <Heading>Rezultat</Heading>
                {teams?.sort(tm => tm.score).map((a, b) => (
                    <Flex alignItems={"center"}>
                        <FaTshirt size={"2rem"} color={a.color}/>
                        <Heading level={5} textAlign={"center"}>{a.name}</Heading>
                        {a?.score && <FaMedal size={"2rem"} color={medalColors[b]}/>}

                    </Flex>
                ))}

            </Card>
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

