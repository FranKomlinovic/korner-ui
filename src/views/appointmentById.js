import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Authenticator, Button, Card, Flex, Heading} from "@aws-amplify/ui-react";
import AppointmentStatusBadge from "../components/appointment/appointmentStatusBadge";
import {getDayAndDateFromAppointment} from "../functions/converters";
import {KornerFieldShort} from "../ui-components";
import {Dialog} from "@mui/material";
import useGetAppointment from "../custom-hooks/appointment/useGetAppointment";
import useGetAppointmentResponses from "../custom-hooks/appointment/useGetAppointmentResponses";
import LoaderComponent from "../components/loaderComponent";
import AppointmentView from "../components/appointment/appointmentView";
import useGetAppointmentTeams from "../custom-hooks/appointment/useGetAppointmentTeams";
import {RotatingLines} from "react-loader-spinner";
import useGetCurrentUser from "../custom-hooks/useGetCurrentUser";

const AppointmentById = () => {
    const {appointmentId} = useParams();
    const teams = useGetAppointmentTeams(appointmentId);
    const appointment = useGetAppointment(appointmentId);
    const responses = useGetAppointmentResponses(appointmentId);
    const [open, setOpen] = useState(false);
    const {userLoading, user} = useGetCurrentUser();

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

                <Flex direction="column">
                    <Flex direction="column" alignItems={"center"}>
                        <KornerFieldShort
                            responseNumber={responses?.data?.filter(a => a?.accepted).length}
                            photo={appointment?.photo}
                            fields={appointment?.field}
                            date={getDayAndDateFromAppointment(appointment?.appointment?.date)}
                            appointment={appointment?.appointment}/>
                        <AppointmentStatusBadge appointmentStatus={appointment?.status}/>
                    </Flex>

                    <Dialog open={open} onClose={() => setOpen(false)}>
                        <Authenticator/>
                    </Dialog>
                    {!user && !userLoading && <RegisterButton/>}
                    {!userLoading ? <AppointmentView appointment={appointment?.appointment} user={user} responses={responses?.data}
                                                field={appointment?.field} teams={teams?.data}
                                                appointmentStatus={appointment?.status}/> :
                        <Flex alignSelf={"center"} justifyContent={"center"} alignItems={"center"} alignContent={"center"}
                              direction={"column"}>
                            <RotatingLines
                                strokeColor="green"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                        </Flex>
                    }
                </Flex>
                : <LoaderComponent/>}

        </Flex>)

}


export default AppointmentById;

