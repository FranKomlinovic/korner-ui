import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Response} from "../models";
import {getCurrentDateInDynamoDbString} from "../functions/converters";
import {Card, Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";

const Home = ({user}) => {
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
            setReservedAppointment(app.filter(a => a.confirmed));
            setAcceptedAppointment(app.filter(a => !a.confirmed && !a.canceled && a.bookerID !== sub));
            setCanceledAppointment(app.filter(a => a.canceled));
        });

    }, [responses, sub])

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
                    c.confirmed.eq(true)
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
                    c.end.ge(currentTime),
                    c.date.ge(getCurrentDateInDynamoDbString(0)),
                    c.canceled.eq(false),
                    c.confirmed.eq(false)
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setRefusedAppointment(app);
        });

    }, [responses, sub])

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

    }, [sub]);

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Card variation={"elevated"}>

                <ReservedAppointment/>
            </Card>
            <Card variation={"elevated"}>

                <OwnedAppointment/>
            </Card>
            <Card variation={"elevated"}>

                <AcceptedAppointment/>
            </Card>
            <Card variation={"elevated"}>

                <RefusedAppointment/>
            </Card>
            <Card variation={"elevated"}>

                <CanceledAppointment/>
            </Card>
            <Card variation={"elevated"}>
                <PlayedAppointment/>
            </Card>
        </Flex>
    )

    function mapToView(appointments: [], text, noReservedText) {
        return appointments.length === 0 ? <Heading level={6}>{noReservedText}</Heading> :
            <Flex direction={"column"}>
                <Heading level={4} alignSelf={"start"}>{text}</Heading>
                {appointments.map(a => {
                    return <Flex key={a.id}>
                        <FigmaAppointment appointment={a}/>
                    </Flex>;
                })}
            </Flex>


    }
}

export default withAuthenticator(Home);
