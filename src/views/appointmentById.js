import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Authenticator, Button, Card, Flex, Heading, Placeholder, useAuthenticator} from "@aws-amplify/ui-react";
import AppointmentStatusBadge from "../components/appointment/appointmentStatusBadge";
import {getDayAndDateFromAppointment} from "../functions/converters";
import {KornerFieldShort} from "../ui-components";
import UnreservedAppointment from "./apppointment/unreservedAppointment";
import {Dialog} from "@mui/material";
import ReservedAppointment from "./apppointment/reservedAppointment";
import CanceledAppointment from "./apppointment/canceledAppointment";
import PlayedAppointment from "./apppointment/playedAppointment";
import {getAppointmentStatus} from "../functions/appointmentUItils";
import useGetAppointmentTeams from "../custom-hooks/appointment/useGetAppointmentTeams";
import useGetAppointment from "../custom-hooks/appointment/useGetAppointment";
import useGetAppointmentResponses from "../custom-hooks/appointment/useGetAppointmentResponses";
import {Storage} from 'aws-amplify';


const AppointmentById = () => {

    const {appointmentId} = useParams();
    const appointment = useGetAppointment(appointmentId);
    const teams = useGetAppointmentTeams(appointmentId);
    const responses = useGetAppointmentResponses(appointmentId);
    const [field, setField] = useState();
    const [appointmentStatus, setAppointmentStatus] = useState();
    const [role, setRole] = useState();
    const [photo, setPhoto] = useState();
    const [open, setOpen] = useState(false);
    const [userModel, setUserModel] = useState();
    const [appointmentView, setAppointmentView] = useState();
    const {user} = useAuthenticator((context) => [
        context.user
    ]);

    // Sets field
    useEffect(() => {
        appointment.data?.Fields.then(a => {
            setField(a);
            a.photo ?
                Storage.get(a.photo).then(b => {
                    setPhoto(b);
                }) :
                setPhoto("/no-field.jpg")
        });
    }, [appointment.data]);

    // Sets status
    useEffect(() => {
        setAppointmentStatus(getAppointmentStatus(appointment.data))
    }, [appointment.data]);

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
            isOwner: appointment.data?.bookerID === attributes.sub
        });
        setOpen(false);
        if (field?.ownerID === attributes.sub) {
            setRole("FIELD_OWNER")
            return;
        }
        if (appointment.data?.bookerID === attributes.sub) {
            setRole("APPOINTMENT_OWNER")
            return;
        }
        setRole("REGISTERED_USER")

    }, [appointment.data, user, field]);

    // Sets appointment view
    useEffect(() => {
        switch (appointmentStatus) {
            case "unreserved" :
                setAppointmentView(<UnreservedAppointment appointment={appointment.data} user={userModel}
                                                          responses={responses.data}
                                                          role={role} field={field}/>)
                break;
            case "reserved" :
                setAppointmentView(<ReservedAppointment role={role} responses={responses.data}
                                                        appointment={appointment.data}
                                                        field={field} user={userModel} teams={teams.data}/>)
                break;
            case "canceled" :
                setAppointmentView(<CanceledAppointment responses={responses.data}/>)
                break;
            case "played" :
                setAppointmentView(<PlayedAppointment appointment={appointment.data} teams={teams.data} role={role}
                                                      responses={responses.data}/>)
                break;
            default:
                setAppointmentView()
        }
    }, [teams.data, appointment.data, appointmentStatus, field, responses.data, role, userModel]);

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

    const PlaceHolder = () => {
        return (
            <Flex marginInline={"2rem"} direction="column" alignItems={"center"} justifyContent={"center"}>
                <Placeholder height={"15rem"} size={"large"}/>
                <Placeholder height={"5rem"} size={"large"}/>
                <Placeholder height={"5rem"} size={"large"}/>
                <Placeholder height={"5rem"} size={"large"}/>
                <Placeholder height={"5rem"} size={"large"}/>
            </Flex>

        );
    }

    return (
        <Flex direction={"column"}>

            {!appointment.loading && appointment.data ?
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                    <KornerFieldShort
                        responseNumber={responses.data?.filter(a => a.accepted).length}
                        photo={photo}
                        fields={field}
                        date={getDayAndDateFromAppointment(appointment.data?.date)}
                        appointment={appointment.data}/>
                    <AppointmentStatusBadge appointmentStatus={appointmentStatus}/>
                    <Dialog open={open} onClose={() => setOpen(false)}>
                        <Authenticator/>
                    </Dialog>
                    {!user && <RegisterButton/>}
                </Flex>
                : <PlaceHolder/>}

            {appointmentView}
        </Flex>)

}


export default AppointmentById;

