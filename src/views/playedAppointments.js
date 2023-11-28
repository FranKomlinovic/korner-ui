import React, {useEffect, useState} from "react";
import {Flex, Heading, withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify/datastore";

import {Appointment, Response} from "../models";
import {getCurrentDate} from "../functions/appointmentUItils";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";
import useGetCurrentUser from "../custom-hooks/useGetCurrentUser";
import LoaderComponent from "../components/loaderComponent";


const PlayedAppointments = () => {
    const [playedAppointment, setPlayedAppointment] = useState([]);
    const [responses, setResponses] = useState();
    const [cognitoID, setCognitoID] = useState();
    const [loading, setLoading] = useState(true);
    const {user} = useGetCurrentUser();

    // Set responses
    useEffect(() => {
        setCognitoID(user?.cognitoID)
    }, [user]);
    // Set responses
    useEffect(() => {
        cognitoID && DataStore.query(Response, b => b.and(
                c => [
                    c.accepted.eq(true),
                    c.playerID.eq(cognitoID)
                ]), {
                sort: (sort) => sort.createdAt(SortDirection.DESCENDING)
            }
        ).then((resps: []) => {
            setResponses(resps);
        });
    }, [cognitoID]);

    // Already played appointments
    useEffect(() => {
        let accepted = responses?.filter(a => a.accepted).map(a => a.appointmentID);
        if (!accepted || accepted?.length === 0) {
            return;
        }
        accepted && DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => accepted?.map(a => c.id.eq(a))),
                    c.date.lt(getCurrentDate()),
                    c.confirmed.eq(true),
                    c.canceled.eq(false)
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setLoading(false);
            setPlayedAppointment(app);
        });

    }, [responses])


    return (
        loading ? <LoaderComponent/> :
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

