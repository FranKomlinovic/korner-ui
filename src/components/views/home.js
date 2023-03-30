import React, {useEffect, useState} from "react";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Response} from "../../models";
import {KornerAppointmentShort} from "../../ui-components";
import {getDayAndDateFromAppointment} from "../converters";
import {Divider, Flex, Heading} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";

const Home = () => {
    const [user, setUser] = useState(null);
    const [appointment, setAppointment] = useState([]);


    useEffect(() => {
        Auth.currentSession().then(usr => {
            let payload = usr.getIdToken().payload;
            setUser(payload);
            DataStore.query(Response, (c) => c.playerID.eq(payload.sub))
                .then((resp) => {
                    let ids = resp.map(a => a.appointmentID);
                    DataStore.query(Appointment, b => b.or(
                        b => [
                            b.id.contains(ids),
                            b.bookerID.eq(payload.sub)
                        ]), {
                        sort: (sort) => sort.date(SortDirection.DESCENDING)
                    }).then((app) => {
                        setAppointment(app)
                    });
                });
        });

    }, []);

    function getReserved() {
        let filter = appointment.filter(a => a.confirmed);
        if (filter.length === 0) {
            return <Heading>Nema potvrđenih termina</Heading>
        }
        return filter.map(a => <KornerAppointmentShort
            date={getDayAndDateFromAppointment(a.date)}
            appointment={a}/>);
    }

    function getNotReserved() {
        let filter = appointment.filter(a => !a.confirmed);
        if (filter.length === 0) {
            return <Heading>Nema nepotvrđenih termina</Heading>
        }
        return filter.map(a => <KornerAppointmentShort
            date={getDayAndDateFromAppointment(a.date)}
            appointment={a}/>);
    }

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Heading level={4} alignSelf={"start"}>Rezervirano:</Heading>
            {getReserved()}
            <Divider color={"#224226"} size={"small"}/>
            <Heading level={4} alignSelf={"start"}>Skupljate se:</Heading>
            {getNotReserved()}
        </Flex>
    )
}

export default Home;
