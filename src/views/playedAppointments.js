import React, {useEffect, useState} from "react";
import {Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Appointment, Response} from "../models";
import {getCurrentDate} from "../functions/appointmentUItils";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";


const PlayedAppointments = ({user}) => {
    const [playedAppointment, setPlayedAppointment] = useState([]);
    const [responses, setResponses] = useState();

    const sub = user?.attributes.sub;

    // Set responses
    useEffect(() => {
        const subscription = DataStore.observeQuery(Response, (c) => c.playerID.eq(sub))
            .subscribe((resp) => {
                setResponses(resp.items);
            });

        return () => subscription.unsubscribe();
    }, [sub]);

    // Already played appointments
    useEffect(() => {
        let accepted = responses?.filter(a => a.accepted).map(a => a.appointmentID);
        if (!accepted || accepted?.length === 0) {
            return;
        }
        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => accepted?.map(a => c.id.eq(a))),
                    c.date.lt(getCurrentDate()),
                    c.confirmed.eq(true),
                    c.canceled.eq(false)
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setPlayedAppointment(app);
        });

    }, [responses, sub])


    return (
        <Flex alignItems={"center"} direction={"column"} marginTop={"1rem"}>
            <Heading level={4} variation={"primary"}>Odigrani termini:</Heading>
            {playedAppointment.length === 0 ? <Heading level={6}>Nemate odigranih termina</Heading> :
                playedAppointment.map(a => {
                    return <Flex key={a.id}>
                        <FigmaAppointment appointment={a}/>
                    </Flex>;
                })}
        </Flex>

    );


}


export default withAuthenticator(PlayedAppointments);

