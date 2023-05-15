import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Authenticator, Button, Card, Flex, Heading, Loader, useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore, Storage} from "aws-amplify";
import {Appointment, Response} from "../models";
import {SortDirection} from "@aws-amplify/datastore";
import AppointmentStatusBadge from "../components/appointment/appointmentStatusBadge";
import {getDayAndDateFromAppointment} from "../functions/converters";
import {KornerFieldShort} from "../ui-components";
import {getAppointmentStatus} from "../functions/appointmentUItils";
import UnreservedAppointment from "./apppointment/unreservedAppointment";
import {Dialog} from "@mui/material";
import ReservedAppointment from "./apppointment/reservedAppointment";
import CanceledAppointment from "./apppointment/canceledAppointment";
import PlayedAppointment from "./apppointment/playedAppointment";

const AppointmentById = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState();
    const [appointmentStatus, setAppointmentStatus] = useState();
    const [field, setField] = useState();
    const [responses, setResponses] = useState();
    const [role, setRole] = useState();
    const [photo, setPhoto] = useState("/no-field.jpg");
    const [open, setOpen] = useState(false);
    const [userModel, setUserModel] = useState();
    const [appointmentView, setAppointmentView] = useState();
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
        setOpen(false);
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
        DataStore.query(Appointment, appointmentId).then(b => {
            setAppointment(b)
            setAppointmentStatus(getAppointmentStatus(b))
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

    // Sets appointment view
    useEffect(() => {
        switch (appointmentStatus) {
            case "unreserved" :
                setAppointmentView(<UnreservedAppointment appointment={appointment} user={userModel}
                                                          responses={responses}
                                                          role={role} field={field}/>)
                break;
            case "reserved" :
                setAppointmentView(<ReservedAppointment role={role} responses={responses} appointment={appointment}
                                                        field={field} user={userModel}/>)
                break;
            case "canceled" :
                setAppointmentView(<CanceledAppointment responses={responses}/>)
                break;
            case "played" :
                setAppointmentView(<PlayedAppointment responses={responses}/>)
                break;
            default:
                setAppointmentView(<Loader/>)
        }
    }, [appointment, appointmentStatus, field, responses, role, userModel]);

    // Gets all responses
    useEffect(() => {
        const subscription = DataStore.observeQuery(Response, (c) => c.and(c => [c.appointmentID.eq(appointmentId)]), {
            sort: (s) => s.accepted(SortDirection.DESCENDING).createdAt(SortDirection.ASCENDING)
        }).subscribe(r => {
            setResponses(r.items)
        })

        return () => subscription.unsubscribe();

    }, [appointmentId]);

    const RegisterButton = () => {
        return (
            <Card variation={"elevated"} marginInline={"1rem"}>
                <Flex direction="column" alignItems={"center"} justifyContent={"space-around"}>
                    <Heading textAlign={"center"} fontSize={"small"}>Jednostavnije odgovori, dogovaraj termine i još
                        mnogo toga...</Heading>
                    <Button onClick={() => setOpen(true)} variation={"primary"}>
                        Prijava / Registracija
                    </Button>
                </Flex>
            </Card>

        );
    }


    return (
        appointmentView ?
            <Flex direction={"column"}>
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                    <KornerFieldShort
                        responseNumber={responses?.filter(a => a.accepted).length}
                        photo={photo}
                        fields={field}
                        date={getDayAndDateFromAppointment(appointment?.date)}
                        appointment={appointment}/>
                    <AppointmentStatusBadge appointmentStatus={appointmentStatus}/>
                </Flex>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <Authenticator/>
                </Dialog>
                {!user && <RegisterButton/>}
                {appointmentView}
            </Flex>
            : <Loader variation="linear"/>);

}


export default AppointmentById;

