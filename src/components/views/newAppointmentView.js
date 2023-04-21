import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Response} from "../../models";
import {SortDirection} from "@aws-amplify/datastore";
import {Card, Flex, Heading} from "@aws-amplify/ui-react";
import UserAppointment from "../components/appointment/userAppointment";
import KornerAppointmentInfoUpdatedWrapper from "../wrappers/kornerAppointmentInfoUpdatedWrapper";
import ListUsersForAppointment from "../components/listUsersForAppointment";
import UnauthorizedReservationForm from "../components/unauthorizedReservationForm";

const NewAppointmentView = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState();
    const [responses, setResponses] = useState();
    const [appointmentNotFound, setAppointmentNotFound] = useState();
    const [user, setUser] = useState();

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
            const payload = u.getIdToken().payload;
            setUser({
                name: payload.given_name + " " + payload.family_name,
                sub: payload.sub,
                photo: payload.picture,
                isOwner: appointment?.bookerID === payload.sub
            });
        }).catch(a => {

        })
    }, [appointment]);

    // Gets all responses
    useEffect(() => {
        DataStore.observeQuery(Response, (c) => c.and(c => [c.appointmentID.eq(appointmentId)]), {
            sort: (s) => s.accepted(SortDirection.DESCENDING).createdAt(SortDirection.ASCENDING)
        }).subscribe(r => {
            setResponses(r.items)
        })

    }, [appointmentId]);

    const NoUserView = () => {
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <Card variation={"elevated"} width={"100%"}>
                    <KornerAppointmentInfoUpdatedWrapper appointment={appointment} responses={responses}/>
                </Card>
                <Card variation={"elevated"} width={"100%"}>
                    <UnauthorizedReservationForm responses={responses} appointmentId={appointmentId}/>
                </Card>
                <Card variation={"elevated"} width={"100%"}>
                    <ListUsersForAppointment user={user} isOwner={false} responses={responses}/>
                </Card>
            </Flex>

        );
    }

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {appointmentNotFound ? <Heading>Termin nije pronađen (osvježi stranicu)</Heading> :
                user ? <UserAppointment user={user} appointment={appointment} responses={responses}/> : <NoUserView/>}
        </Flex>
    );
}


export default NewAppointmentView;

