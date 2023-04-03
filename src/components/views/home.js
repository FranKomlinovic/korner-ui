import React, {useEffect, useMemo, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Response} from "../../models";
import {KornerAppointmentShort} from "../../ui-components";
import {getDayAndDateFromAppointment} from "../converters";
import {Divider, Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";

const Home = ({user}) => {
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        let payload = user.attributes;
        DataStore.query(Response, (c) => c.playerID.eq(payload.sub))
            .then((resp) => {
                let ids = resp.map(a => a.appointmentID);
                DataStore.query(Appointment, b => b.or(
                    c => [
                        c.id.contains(ids),
                        c.bookerID.contains(payload.sub)
                    ]), {
                    sort: (sort) => sort.date(SortDirection.DESCENDING)
                }).then((app) => {
                    setAppointment(app)
                });
            });

    }, [user]);

    const reserved = useMemo(() => {
        let filter = appointment.filter(a => a.confirmed);
        if (filter.length === 0) {
            return <Heading>Nema potvrđenih termina</Heading>
        }
        return filter.map(a => <KornerAppointmentShort
            date={getDayAndDateFromAppointment(a.date)}
            appointment={a}/>);
    }, [appointment]);

    const notReserved = useMemo(() => {
        let filter = appointment.filter(a => !a.confirmed);
        if (filter.length === 0) {
            return <Heading>Nema nepotvrđenih termina</Heading>
        }
        return filter.map(a => <KornerAppointmentShort
            date={getDayAndDateFromAppointment(a.date)}
            appointment={a}/>);
    }, [appointment]);

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Heading level={4} alignSelf={"start"}>Rezervirano:</Heading>
            {reserved}
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Skupljate se:</Heading>
            {notReserved}
        </Flex>
    )
}

export default withAuthenticator(Home);
