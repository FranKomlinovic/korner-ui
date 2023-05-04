import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Flex, useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Appointment, Response} from "../models";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";
import AppointmentPlayerList from "../components/appointment/appointmentPlayerList";
import AppointmentReservationForm from "../components/appointment/appointmentReservationForm";
import AppointmentUnauthorizedReservationForm from "../components/appointment/appointmentUnauthorizedReservationForm";
import AppointmentStatusBadge from "../components/appointment/appointmentStatusBadge";
import AppointmentReservationButton from "../components/appointment/appointmentReservationButton";
import AppointmentGuestForm from "../components/appointment/appointmentGuestForm";
import AppointmentShareLink from "../components/appointment/appointmetShareLink";
import AppointmentCancelButton from "../components/appointment/appointmentCancelButton";

const AppointmentById = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState();
    const [field, setField] = useState();
    const [responses, setResponses] = useState();
    const [role, setRole] = useState();
    const [userModel, setUserModel] = useState();
    const [responseToUpdate, setResponseToUpdate] = useState();
    const {user} = useAuthenticator((context) => [
        context.user
    ]);

    // Sets role
    useEffect(() => {
        if (!user) {
            setRole("GUEST_USER")
            return;
        }
        const attributes = user?.attributes;
        setUserModel({
            name: attributes.given_name + " " + attributes.family_name,
            sub: attributes.sub,
            photo: attributes.picture,
            isOwner: appointment?.bookerID === attributes.sub
        });
        if (field?.ownerID === attributes.sub) {
            setRole("FIELD_OWNER")
            return;
        }
        if (appointment?.bookerID === attributes.sub) {
            setRole("APPOINTMENT_OWNER")
            return;
        }
        setRole("REGISTERED_USER")


    }, [appointment, user, field]);

    // Sets appointment
    useEffect(() => {
        DataStore.query(Appointment, appointmentId).then(a => {
            setAppointment(a)
        })
    }, [appointmentId]);

    // Sets field
    useEffect(() => {
        appointment?.Fields.then(a => setField(a));
    }, [appointment]);

    // Gets all responses
    useEffect(() => {
        DataStore.observeQuery(Response, (c) => c.and(c => [c.appointmentID.eq(appointmentId)]), {
            sort: (s) => s.accepted(SortDirection.DESCENDING).createdAt(SortDirection.ASCENDING)
        }).subscribe(r => {
            setResponses(r.items)
        })

    }, [appointmentId]);

    useEffect(() => {
        setResponseToUpdate(responses?.find((response) => response.playerID === userModel?.sub));
    }, [responses, userModel]);

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            <FigmaAppointment appointment={appointment}/>
            <AppointmentStatusBadge appointment={appointment}/>
            <AppointmentShareLink appointment={appointment} field={field}/>
            <AppointmentReservationButton appointment={appointment} responses={responses} field={field} role={role}/>
            {user ? <AppointmentReservationForm user={userModel} appointment={appointment}
                                                responseToUpdate={responseToUpdate}/> :
                <AppointmentUnauthorizedReservationForm responses={responses} appointment={appointment}/>}
            <AppointmentPlayerList user={userModel} responses={responses} role={role}/>
            <AppointmentGuestForm role={role} appointment={appointment}/>
            <AppointmentCancelButton role={role} appointment={appointment}/>

        </Flex>
    );
}


export default AppointmentById;

