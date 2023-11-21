import React, {useEffect, useState} from "react";
import {Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify/datastore";

import {Appointment, Response} from "../models";
import {getCurrentDate} from "../functions/appointmentUItils";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";
import useGetCurrentUser from "../custom-hooks/useGetCurrentUser";


const PlayedAppointments = () => {
    const [playedAppointment, setPlayedAppointment] = useState([]);
    const [responses, setResponses] = useState();
    const [cognitoID, setCognitoID] = useState();
    const {user} = useGetCurrentUser();

    // Set responses
    useEffect(() => {
        setCognitoID(user?.cognitoID)
    }, [user]);
    // Set responses
    useEffect(() => {
        const subscription = DataStore.observeQuery(Response, (c) => c.playerID.eq(cognitoID))
            .subscribe((resp) => {
                setResponses(resp.items);
            });

        return () => subscription.unsubscribe();
    }, [cognitoID]);

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

    }, [responses])


    return (
        <Flex alignItems={"center"} direction={"column"} marginTop={"1rem"}>
            <Heading level={4} variation={"primary"}>Odigrani termini: {playedAppointment.length}</Heading>
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

