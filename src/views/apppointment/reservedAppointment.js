import React from "react";
import {Card, Flex} from "@aws-amplify/ui-react";
import AppointmentPlayerList from "../../components/appointment/appointmentPlayerList";
import AppointmentShareLink from "../../components/appointment/appointmetShareLink";
import AppointmentCancelButton from "../../components/appointment/appointmentCancelButton";
import AppointmentUnauthorizedReservationForm
    from "../../components/appointment/appointmentUnauthorizedReservationForm";
import AppointmentReservationForm from "../../components/appointment/appointmentReservationForm";
import AppointmentGuestForm from "../../components/appointment/appointmentGuestForm";

const ReservedAppointment = ({responses, role, appointment, field, user}) => {

    return (
        <Flex direction="column">
            {role === "APPOINTMENT_OWNER" &&
                <Flex direction={"column"} alignItems={"center"}>
                    <AppointmentShareLink appointment={appointment} field={field}/>
                </Flex>}
            <Card variation={"elevated"} marginInline={"1rem"}>
                {role === "GUEST_USER" ?
                    <AppointmentUnauthorizedReservationForm responses={responses} appointment={appointment}/> :
                    <AppointmentReservationForm user={user} appointment={appointment} responses={responses}/>
                }
            </Card>

            <Card variation={"elevated"} marginInline={"1rem"}>
                <AppointmentPlayerList responses={responses} showDelete={role === "APPOINTMENT_OWNER"}/>
            </Card>

            {role === "APPOINTMENT_OWNER" && <AppointmentGuestForm appointment={appointment}/>}
            {role === "FIELD_OWNER" && <AppointmentCancelButton appointment={appointment}/>}

        </Flex>
    );
}


export default ReservedAppointment;

