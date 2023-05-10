import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Response} from "../models";
import {getCurrentDateInDynamoDbString} from "../functions/converters";
import {Card, Flex, Heading, useAuthenticator} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";
import LandingPage from "./landing-page";

const Home = () => {

    const {user} = useAuthenticator((context) => [
        context.user
    ]);


    const [reservedAppointment, setReservedAppointment] = useState([]);
    const [ownedAppointment, setOwnedAppointment] = useState([]);
    const [acceptedAppointment, setAcceptedAppointment] = useState([]);
    const [refusedAppointment, setRefusedAppointment] = useState([]);
    const [canceledAppointment, setCanceledAppointment] = useState([]);
    const [playedAppointment, setPlayedAppointment] = useState([]);
    const [responses, setResponses] = useState([]);

    const sub = user?.attributes.sub;
    const currentTime = new Date().toTimeString();
    const ReservedAppointment = () => mapToView(reservedAppointment, "Rezervirani Termini", "Trenutno nema rezerviranih termina");
    const OwnedAppointment = () => mapToView(ownedAppointment, "Termini koje organizirate", "Trenutno ne organizirate termin");
    const AcceptedAppointment = () => mapToView(acceptedAppointment, "Prihvaćeni termini", "Trenurno nema prihvaćenih termina");
    const RefusedAppointment = () => mapToView(refusedAppointment, "Odbijeni termini", "Trenutno nema odbijenih termina");
    const CanceledAppointment = () => mapToView(canceledAppointment, "Otkazani termini", "Trenurno nema otkazanih termina");
    const PlayedAppointment = () => mapToView(playedAppointment, "Odigrani termini", "Trenurno nema odigranih termina");

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
                    c.end.ge(currentTime),
                    c.date.ge(getCurrentDateInDynamoDbString(0))
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setReservedAppointment(app.filter(a => a.confirmed && !a.canceled));
            setAcceptedAppointment(app.filter(a => !a.confirmed && !a.canceled && a.bookerID !== sub));
            setCanceledAppointment(app.filter(a => a.canceled));
        });

    }, [currentTime, responses, sub])

    // Already played appointments
    useEffect(() => {
        let accepted = responses.filter(a => a.accepted).map(a => a.appointmentID);
        if (accepted.length === 0) {
            return;
        }
        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => accepted.map(a => c.id.eq(a))),
                    c.date.lt(getCurrentDateInDynamoDbString(0)),
                    c.confirmed.eq(true),
                    c.canceled.eq(false)
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setPlayedAppointment(app);
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
                    c.and(d => [c.end.ge(currentTime), c.date.ge(getCurrentDateInDynamoDbString(0))]),
                    c.canceled.eq(false)
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setRefusedAppointment(app);
        });

    }, [currentTime, responses, sub])

    // Owned appointment
    useEffect(() => {
        DataStore.query(Appointment, b => b.and(
            c => [
                c.bookerID.eq(sub),
                c.date.ge(getCurrentDateInDynamoDbString(0)),
                c.end.ge(currentTime),
                c.canceled.eq(false),
                c.confirmed.eq(false),
            ]), {
            sort: (sort) => sort.date(SortDirection.DESCENDING)
        }).then((app) => {
            setOwnedAppointment(app);
        });

    }, [currentTime, sub]);

    const appointmnents = () => (<Flex direction={"column"}>
        <Card variation={"elevated"} marginInline={"1rem"}>
            <ReservedAppointment/>
        </Card>
        <Card variation={"elevated"} marginInline={"1rem"}>
            <OwnedAppointment/>
        </Card>
        <Card variation={"elevated"} marginInline={"1rem"}>
            <AcceptedAppointment/>
        </Card>
        <Card variation={"elevated"} marginInline={"1rem"}>
            <RefusedAppointment/>
        </Card>
        <Card variation={"elevated"} marginInline={"1rem"}>
            <CanceledAppointment/>
        </Card>
        <Card variation={"elevated"} marginInline={"1rem"}>
            <PlayedAppointment/>
        </Card>
    </Flex>)

    return (
        user ? appointmnents() : <LandingPage/>
    )

    function mapToView(appointments: [], text, noReservedText) {
        return appointments.length === 0 ? <Heading level={6}>{noReservedText}</Heading> :
            <Flex direction={"column"}>
                <Heading level={4} alignSelf={"start"}>{text}</Heading>
                {appointments.map(a => {
                    return <Flex alignSelf={"center"} key={a.id}>
                        <FigmaAppointment appointment={a}/>
                    </Flex>;
                })}
            </Flex>


    }
}

export default Home;
