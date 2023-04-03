import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Response} from "../../models";
import {KornerAppointmentShort} from "../../ui-components";
import {getCurrentDateInDynamoDbString, getDayAndDateFromAppointment} from "../converters";
import {Divider, Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";

const Home = ({user}) => {
    const [reservedAppointment, setReservedAppointment] = useState();
    const [ownedAppointment, setOwnedAppointment] = useState();
    const [acceptedAppointment, setAcceptedAppointment] = useState();
    const [refusedAppointment, setRefusedAppointment] = useState();
    const [responses, setResponses] = useState();

    useEffect(() => {
        if (responses === undefined || user === undefined) {
            return;
        }
        let accepted = responses.filter(a => a.accepted).map(a => a.appointmentID);
        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => accepted.map(a => c.id.eq(a))),
                    c.date.ge(getCurrentDateInDynamoDbString(0))
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setReservedAppointment(app.filter(a => a.confirmed));
            setAcceptedAppointment(app.filter(a => !a.confirmed && a.bookerID !== user.attributes.sub));
        });

    }, [responses, user])

    useEffect(() => {
        if (responses === undefined || user === undefined) {
            return;
        }
        let refused = responses?.filter(a => !a.accepted).map(a => a.appointmentID)

        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => refused.map(a => c.id.eq(a))),
                    c.bookerID.ne(user.attributes.sub),
                    c.date.ge(getCurrentDateInDynamoDbString(0))
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setRefusedAppointment(app.filter(a => !a.confirmed));
        });

    }, [responses, user])


    useEffect(() => {
        let payload = user.attributes;
        DataStore.query(Response, (c) => c.playerID.eq(payload.sub))
            .then((resp) => {
                setResponses(resp);
            });

    }, [user]);

    useEffect(() => {
        let payload = user.attributes;
        DataStore.query(Appointment, b => b.and(
            c => [
                c.bookerID.eq(payload.sub),
                c.date.ge(getCurrentDateInDynamoDbString(0)),
            ]), {
            sort: (sort) => sort.date(SortDirection.DESCENDING)
        }).then((app) => {
            setOwnedAppointment(app.filter(a => !a.confirmed));
        });

    }, [user]);

    function mapToView(test: []) {
        if (test === undefined) {
            return;
        }
        if (test.length === 0) {
            return <Heading>Nema termina</Heading>
        }
        return test.map(a => <Flex key={a.id} >
            <KornerAppointmentShort
                date={getDayAndDateFromAppointment(a.date)}
                appointment={a}/>
        </Flex>);
    }

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Heading level={4} alignSelf={"start"}>Rezervirani termini:</Heading>
            {user && responses && mapToView(reservedAppointment)}
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Termini koje organizirate:</Heading>
            {mapToView(ownedAppointment)}
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Termini koje ste prihvatili:</Heading>
            {user && responses && mapToView(acceptedAppointment)}
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Termini koje ste odbili:</Heading>
            {user && responses && mapToView(refusedAppointment)}
        </Flex>
    )
}

export default withAuthenticator(Home);
