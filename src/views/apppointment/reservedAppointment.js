import React, {useState} from "react";
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
import AppointmentTeamsDnd from "../../components/appointment/appointmentTeamsDnd";

const ReservedAppointment = ({responses, role, appointment, field, user, teams}) => {
    const [isChecked, setIsChecked] = useState(teams? teams.length !== 0 : false);

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
                {isChecked ? <AppointmentTeamsDnd resp={responses} tms={teams} appointmentID={appointment.id} isOwner={role === "APPOINTMENT_OWNER"}/> :
                    <AppointmentPlayerList responses={responses} showDelete={role === "APPOINTMENT_OWNER"}/>}
            </Card>

            {role === "APPOINTMENT_OWNER" && !appointment?.locked && <Card variation={"elevated"} marginInline={"1rem"}>
                <AppointmentGuestForm appointment={appointment}/>
            </Card>}
            {role === "FIELD_OWNER" && <AppointmentCancelButton appointment={appointment}/>}

        </Flex>
    );
}


export default ReservedAppointment;

