import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Response} from "../../models";
import {getCurrentDateInDynamoDbString} from "../converters";
import {Divider, Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";
import KornerAppointmentShortWrapper from "../wrappers/kornerAppointmentShortWrapper";

const Home = ({user}) => {
    const [reservedAppointment, setReservedAppointment] = useState([]);
    const [ownedAppointment, setOwnedAppointment] = useState([]);
    const [acceptedAppointment, setAcceptedAppointment] = useState([]);
    const [refusedAppointment, setRefusedAppointment] = useState([]);
    const [responses, setResponses] = useState([]);

    const sub = user?.attributes.sub;
    const ReservedAppointment = () => mapToView(reservedAppointment);
    const OwnedAppointment = () => mapToView(ownedAppointment);
    const AcceptedAppointment = () => mapToView(acceptedAppointment);
    const RefusedAppointment = () => mapToView(refusedAppointment);

    // Set responses
    useEffect(() => {
        DataStore.query(Response, (c) => c.playerID.eq(sub))
            .then((resp) => {
                setResponses(resp);
            });

    }, [sub]);

    // Reserved appointment and acceptedAppointment
    useEffect(() => {
        let accepted = responses.filter(a => a.accepted).map(a => a.appointmentID);
        if (accepted.length === 0) {
            return;
        }
        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => accepted.map(a => c.id.eq(a))),
                    c.date.ge(getCurrentDateInDynamoDbString(0))
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setReservedAppointment(app.filter(a => a.confirmed));
            setAcceptedAppointment(app.filter(a => !a.confirmed && a.bookerID !== sub));
        });

    }, [responses, sub])

    // Refused appointment
    useEffect(() => {
        let refused = responses.filter(a => !a.accepted).map(a => a.appointmentID)

        if (refused.length === 0) {
            return;
        }
        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => refused.map(a => c.id.eq(a))),
                    c.bookerID.ne(sub),
                    c.date.ge(getCurrentDateInDynamoDbString(0))
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setRefusedAppointment(app.filter(a => !a.confirmed));
        });

    }, [responses, sub])

    // Owned appointment
    useEffect(() => {
        DataStore.query(Appointment, b => b.and(
            c => [
                c.bookerID.eq(sub),
                c.date.ge(getCurrentDateInDynamoDbString(0)),
            ]), {
            sort: (sort) => sort.date(SortDirection.DESCENDING)
        }).then((app) => {
            setOwnedAppointment(app.filter(a => !a.confirmed));
        });

    }, [sub]);

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Heading level={4} alignSelf={"start"}>Rezervirani termini:</Heading>
            <ReservedAppointment/>
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Termini koje organizirate:</Heading>
            <OwnedAppointment/>
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Termini koje ste prihvatili:</Heading>
            <AcceptedAppointment/>
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Termini koje ste odbili:</Heading>
            <RefusedAppointment/>
        </Flex>
    )

    function mapToView(appointments: []) {
        return appointments.length === 0 ? <Heading>Nema termina</Heading> : appointments.map(a => {
            return <Flex key={a.id}>
                <KornerAppointmentShortWrapper appointment={a}/>
            </Flex>;
        });
    }
}

export default withAuthenticator(Home);
