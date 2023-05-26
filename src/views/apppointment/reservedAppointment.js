import React, {useEffect, useState} from "react";
import {Card, Flex} from "@aws-amplify/ui-react";
import AppointmentPlayerList from "../../components/appointment/appointmentPlayerList";
import AppointmentShareLink from "../../components/appointment/appointmetShareLink";
import AppointmentCancelButton from "../../components/appointment/appointmentCancelButton";
import AppointmentUnauthorizedReservationForm
    from "../../components/appointment/appointmentUnauthorizedReservationForm";
import AppointmentReservationForm from "../../components/appointment/appointmentReservationForm";
import AppointmentGuestForm from "../../components/appointment/appointmentGuestForm";
import AppointmentLockButton from "../../components/appointment/appointmetLockButton";
import AppointmentTeamButton from "../../components/appointment/appointmetTeamButton";
import AppointmentTeams from "../../components/appointment/appointmentTeams";

const ReservedAppointment = ({responses, role, appointment, field, user, teams}) => {
    const [isChecked, setIsChecked] = useState();

    useEffect(() => {
        setIsChecked(teams.length !== 0)
    }, [teams])
    return (
        <Flex direction="column">
            {role === "APPOINTMENT_OWNER" &&
                <Flex alignItems={"center"} direction={"column"}>
                    <AppointmentShareLink appointment={appointment} field={field}/>
                </Flex>}
            <Card variation={"elevated"} marginInline={"1rem"}>
                {role === "GUEST_USER" ?
                    <AppointmentUnauthorizedReservationForm responses={responses} appointment={appointment}/> :
                    <AppointmentReservationForm user={user} appointment={appointment} responses={responses}/>
                }
            </Card>

            <Card variation={"elevated"} marginInline={"1rem"}>
                {role === "APPOINTMENT_OWNER" &&
                    <Flex direction={"column"}>
                        <AppointmentLockButton appointment={appointment}/>
                        <AppointmentTeamButton checkedFunction={setIsChecked} checked={isChecked}
                                               appointment={appointment} teams={teams} responses={responses}/>
                    </Flex>
                }
                {isChecked ? <AppointmentTeams teams={teams}/> :
                    <AppointmentPlayerList responses={responses} showDelete={role === "APPOINTMENT_OWNER"}/>}
            </Card>

            {role === "APPOINTMENT_OWNER" && <Card variation={"elevated"} marginInline={"1rem"}>
                <AppointmentGuestForm appointment={appointment}/>
            </Card>}
            {role === "FIELD_OWNER" && <AppointmentCancelButton appointment={appointment}/>}

        </Flex>
    );
}


export default ReservedAppointment;

