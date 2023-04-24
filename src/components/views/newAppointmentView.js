import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Response} from "../../models";
import {SortDirection} from "@aws-amplify/datastore";
import {Authenticator, Button, Card, Flex, Heading, useAuthenticator} from "@aws-amplify/ui-react";
import UserAppointment from "../components/appointment/userAppointment";
import ListUsersForAppointment from "../components/listUsersForAppointment";
import UnauthorizedReservationForm from "../components/unauthorizedReservationForm";
import KornerAppointmentShortWrapper from "../wrappers/kornerAppointmentShortWrapper";
import {Dialog} from "@mui/material";

const NewAppointmentView = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState();
    const [responses, setResponses] = useState();
    const [appointmentNotFound, setAppointmentNotFound] = useState();
    const [open, setOpen] = useState(false);
    const [userr, setUser] = useState();
    const {user} = useAuthenticator((context) => [
        context.user
    ]);

    // Sets appointments
    useEffect(() => {
        DataStore.query(Appointment, appointmentId).then(a => {
            console.log(a);
            a ? setAppointment(a) : setAppointmentNotFound(true);
        })
    }, [appointmentId]);

    // Sets user and checks if user is owner
    useEffect(() => {
        Auth.currentSession().then((u) => {
            let attributes = user.attributes;
            setUser({
                name: attributes.given_name + " " + attributes.family_name,
                sub: attributes.sub,
                photo: attributes.picture,
                isOwner: appointment?.bookerID === attributes.sub
            });
        }).catch(a => {

        })
    }, [user,appointment]);

    // Gets all responses
    useEffect(() => {
        DataStore.observeQuery(Response, (c) => c.and(c => [c.appointmentID.eq(appointmentId)]), {
            sort: (s) => s.accepted(SortDirection.DESCENDING).createdAt(SortDirection.ASCENDING)
        }).subscribe(r => {
            setResponses(r.items)
        })

    }, [appointmentId]);

    useEffect(() => {
        if (open && user) {
            setOpen(false);
        }
    }, [open, user]);


    const NoUserView = () => {
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <Authenticator/>
                </Dialog>
                <Card variation={"elevated"} width={"100%"}>
                    <KornerAppointmentShortWrapper appointment={appointment}/>
                </Card>
                <Card variation={"elevated"} width={"100%"}>
                    <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                        <Heading textAlign={"center"} fontSize={"small"}>Jednostavnije odgovori, dogovaraj termine i još
                            mnogo toga...</Heading>
                        <Button onClick={() => setOpen(true)} variation={"primary"}>
                            Napravi profil
                        </Button>
                    </Flex>
                </Card>
                <Card variation={"elevated"} width={"100%"}>
                    <UnauthorizedReservationForm responses={responses} appointmentId={appointmentId}/>
                </Card>
                <Card variation={"elevated"} width={"100%"}>
                    <ListUsersForAppointment user={userr} isOwner={false} responses={responses}/>
                </Card>
            </Flex>

        );
    }

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {appointmentNotFound ? <Heading>Termin nije pronađen (osvježi stranicu)</Heading> :
                userr ? <UserAppointment user={userr} appointment={appointment} responses={responses}/> : <NoUserView/>}
        </Flex>
    );
}


export default NewAppointmentView;

