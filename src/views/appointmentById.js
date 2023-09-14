import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Authenticator, Button, Card, Flex, Heading, useAuthenticator} from "@aws-amplify/ui-react";
import AppointmentStatusBadge from "../components/appointment/appointmentStatusBadge";
import {getDayAndDateFromAppointment} from "../functions/converters";
import {KornerFieldShort} from "../ui-components";
import {Dialog} from "@mui/material";
import useGetAppointment from "../custom-hooks/appointment/useGetAppointment";
import useGetAppointmentResponses from "../custom-hooks/appointment/useGetAppointmentResponses";
import LoaderComponent from "../components/loaderComponent";
import AppointmentView from "../components/appointment/appointmentView";
import useGetAppointmentTeams from "../custom-hooks/appointment/useGetAppointmentTeams";


const AppointmentById = () => {
    const {appointmentId} = useParams();
    const teams = useGetAppointmentTeams(appointmentId);
    const appointment = useGetAppointment(appointmentId);
    const responses = useGetAppointmentResponses(appointmentId);
    const [open, setOpen] = useState(false);
    const {user} = useAuthenticator((context) => [
        context.user
    ]);

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
        <Flex direction={"column"}>
            {!appointment?.loading && appointment?.appointment ?
                <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                    <KornerFieldShort
                        responseNumber={responses?.data?.filter(a => a?.accepted).length}
                        photo={appointment?.photo}
                        fields={appointment?.field}
                        date={getDayAndDateFromAppointment(appointment?.appointment?.date)}
                        appointment={appointment?.appointment}/>
                    <AppointmentStatusBadge appointmentStatus={appointment?.status}/>
                    <Dialog open={open} onClose={() => setOpen(false)}>
                        <Authenticator/>
                    </Dialog>
                    {!user && <RegisterButton/>}
                </Flex>
                : <LoaderComponent/>}
            <AppointmentView appointment={appointment?.appointment} user={user} responses={responses?.data}
                             field={appointment?.field} teams={teams?.data} appointmentStatus={appointment?.status}/>
        </Flex>)

}


export default AppointmentById;

