import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify/datastore";

import {Appointment, Response} from "../models";
import {Badge, Flex, Heading, Tabs, withAuthenticator} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";
import {getCurrentDate, isAppointmentOld} from "../functions/appointmentUItils";
import OwnerFieldListComponent from "../components/ownerFieldListComponent";
import ShortcutsComponent from "../components/shortcutsComponent";
import useGetCurrentUser from "../custom-hooks/useGetCurrentUser";

const Home = () => {

    const [reservedAppointment, setReservedAppointment] = useState([]);
    const [acceptedAppointment, setAcceptedAppointment] = useState([]);
    const [canceledAppointment, setCanceledAppointment] = useState([]);
    const [responses, setResponses] = useState();
    const {user} = useGetCurrentUser();

    const MapToView = ({appointments, noReservedText}) => (
        <Flex alignItems={"center"} direction={"column"} marginTop={"1rem"}>
            {appointments.length === 0 ? <Heading level={6}>{noReservedText}</Heading> :
                appointments.map(a => {
                    return <Flex key={a.id}>
                        <FigmaAppointment appointment={a}/>
                    </Flex>;
                })}
        </Flex>)

    // Set responses
    useEffect(() => {
        user && DataStore.query(Response, (c) => c.playerID.eq(user?.cognitoID), {sort: (s) => s.createdAt(SortDirection.ASCENDING)})
            .then((resp) => {
                setResponses(resp);
            });
    }, [user]);

    // Reserved appointment and acceptedAppointment
    useEffect(() => {
        let accepted = responses?.filter(a => a.accepted).map(a => a.appointmentID);
        if (!accepted || accepted?.length === 0) {
            return;
        }
        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(d => accepted.map(a => d.id.eq(a))),
                    c.date.ge(getCurrentDate())

                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            const filtered = app.filter(a => !isAppointmentOld(a));
            setReservedAppointment(filtered.filter(a => a.confirmed && !a.canceled));
            setAcceptedAppointment(filtered.filter(a => !a.confirmed && !a.canceled));
            setCanceledAppointment(filtered.filter(a => a.canceled));
        });

    }, [responses])

    const tabList = [
        {
            title: "Rezervirano", variation: "success",
            data: <MapToView appointments={reservedAppointment}
                             noReservedText={"Trenutno nema rezerviranih termina"}/>,
            length: reservedAppointment.length
        },
        {
            title: "U najavi", variation: "warning",
            data: <MapToView appointments={acceptedAppointment}
                             noReservedText={"Trenutno nema termina u najavi"}/>,
            length: acceptedAppointment.length
        },
        {
            title: "Otkazano", variation: "error",
            data: <MapToView appointments={canceledAppointment}
                             noReservedText={"Trenutno nema otkazanih termina"}/>,
            length: canceledAppointment.length
        }]

    const AppointmentTabs = () => (
        <Flex gap={"0rem"} direction={"column"} paddingTop={"0px"}>
            <Heading marginLeft={"1rem"} level={4} variation={"primary"}>Termini:</Heading>
            <Tabs
                justifyContent="flex-start"
                defaultValue={"Rezervirano"}
                items={tabList.map(a => {
                    return ({
                        label: <>
                            {a.title + ' '}
                            <Badge size={"small"} variation={a.variation}>{a.length}</Badge>
                        </>,
                        value: a.title,
                        content: a.data
                    })
                })}
            >
            </Tabs>
        </Flex>)

    return (
        <Flex direction={"column"} gap={"1rem"} marginTop={"1rem"}>
            <AppointmentTabs/>
            <OwnerFieldListComponent user={user}/>
            <ShortcutsComponent/>
        </Flex>
    );


}

export default withAuthenticator(Home);
