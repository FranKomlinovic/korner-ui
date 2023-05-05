import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Flex, useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore, Storage} from "aws-amplify";
import {Appointment, Response} from "../models";
import {SortDirection} from "@aws-amplify/datastore";
import AppointmentPlayerList from "../components/appointment/appointmentPlayerList";
import AppointmentReservationForm from "../components/appointment/appointmentReservationForm";
import AppointmentUnauthorizedReservationForm from "../components/appointment/appointmentUnauthorizedReservationForm";
import AppointmentStatusBadge from "../components/appointment/appointmentStatusBadge";
import AppointmentReservationButton from "../components/appointment/appointmentReservationButton";
import AppointmentGuestForm from "../components/appointment/appointmentGuestForm";
import AppointmentShareLink from "../components/appointment/appointmetShareLink";
import AppointmentCancelButton from "../components/appointment/appointmentCancelButton";
import {getCurrentDateInDynamoDbString, getDayAndDateFromAppointment} from "../functions/converters";
import {KornerFieldShort} from "../ui-components";

const AppointmentById = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState();
    const [field, setField] = useState();
    const [responses, setResponses] = useState();
    const [role, setRole] = useState();
    const [photo, setPhoto] = useState();
    const [isOld, setIsOld] = useState();
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
        DataStore.observeQuery(Appointment, c => c.id.eq(appointmentId)).subscribe(b => {
            console.log(b)
            const a = b.items[0];
            setAppointment(a)
            const currentDate = getCurrentDateInDynamoDbString(0);
            setIsOld(a.date < currentDate || (a.date === currentDate && a.start <= new Date().toTimeString()));
        })
    }, [appointmentId]);

    // Sets field
    useEffect(() => {
        appointment?.Fields.then(a => {
            setField(a);
            a.photo ?
                Storage.get(a.photo).then(b => {
                    setPhoto(b);
                }) :
                setPhoto("/no-field.jpg")

        });
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

    const ReservationForm = () => {
        if (isOld) {
            return;
        }
        return (
            user ? <AppointmentReservationForm user={userModel} appointment={appointment}
                                               responseToUpdate={responseToUpdate}/> :
                <AppointmentUnauthorizedReservationForm responses={responses} appointment={appointment}/>
        )
    }
    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            <KornerFieldShort
                responseNumber={responses?.filter(a => a.accepted).length}
                photo={photo}
                fields={field}
                date={getDayAndDateFromAppointment(appointment?.date)}
                appointment={appointment}/>
            {/*<FigmaAppointment appointment={appointment}/>*/}
            <AppointmentStatusBadge appointment={appointment}/>
            <AppointmentReservationButton appointment={appointment} responses={responses} field={field} role={role}/>
            <AppointmentShareLink appointment={appointment} field={field} role={role}/>
            {ReservationForm()}
            <AppointmentPlayerList user={userModel} responses={responses} role={role}
                                   isLocked={isOld || appointment?.canceled}/>
            {!isOld && <AppointmentGuestForm role={role} appointment={appointment}/>}
            {!isOld && <AppointmentCancelButton role={role} appointment={appointment}/>}

        </Flex>
    );
}


export default AppointmentById;

