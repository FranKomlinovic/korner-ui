import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Fields, Response} from "../models";
import {Badge, Card, Flex, Grid, Heading, TabItem, Tabs, Text, useAuthenticator} from "@aws-amplify/ui-react";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaAppointment from "../figma-components/FigmaAppointment";
import LandingPage from "./landing-page";
import {FaPlusCircle, FaQuestion, FaRunning, FaUser} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {getCurrentDate, getCurrentTime} from "../functions/appointmentUItils";
import {checkIfInOwnerGroup} from "../functions/converters";
import FigmaField from "../figma-components/FigmaField";

const Home = () => {
    const navigate = useNavigate();
    const {user} = useAuthenticator((context) => [
        context.user
    ]);

    const [reservedAppointment, setReservedAppointment] = useState([]);
    const [acceptedAppointment, setAcceptedAppointment] = useState([]);
    const [canceledAppointment, setCanceledAppointment] = useState([]);
    const [responses, setResponses] = useState();
    const [isOwner, setIsOwner] = useState();
    const [fields, setFields] = useState();

    const sub = user?.attributes.sub;
    const ReservedAppointment = () => mapToView(reservedAppointment, "Rezervirani Termini", "Trenutno nema rezerviranih termina");
    const AcceptedAppointment = () => mapToView(acceptedAppointment, "Prihvaćeni termini", "Trenurno nema prihvaćenih termina");
    const CanceledAppointment = () => mapToView(canceledAppointment, "Otkazani termini", "Trenurno nema otkazanih termina");

    //Checks if user is in owner group
    useEffect(() => {
        setIsOwner(checkIfInOwnerGroup(user));
    }, [user]);

    //Gets owners fields
    useEffect(() => {
        if (isOwner) {
            DataStore.query(Fields, a =>
                a.ownerID.eq(sub)
            ).then(a => {
                setFields(a);
            })
        }
    }, [isOwner, sub]);

    // Set responses
    useEffect(() => {
        const subscription = DataStore.observeQuery(Response, (c) => c.playerID.eq(sub))
            .subscribe((resp) => {
                setResponses(resp.items);
            });

        return () => subscription.unsubscribe();
    }, [sub]);

    // Reserved appointment and acceptedAppointment
    useEffect(() => {
        let accepted = responses?.filter(a => a.accepted).map(a => a.appointmentID);
        if (!accepted || accepted?.length === 0) {
            return;
        }
        DataStore.query(Appointment, b => b.and(
                c => [
                    c.or(c => accepted.map(a => c.id.eq(a))),
                    c.end.ge(getCurrentTime()),
                    c.date.ge(getCurrentDate())
                ]), {
                sort: (sort) => sort.date(SortDirection.DESCENDING)
            }
        ).then((app) => {
            setReservedAppointment(app.filter(a => a.confirmed && !a.canceled));
            setAcceptedAppointment(app.filter(a => !a.confirmed && !a.canceled));
            setCanceledAppointment(app.filter(a => a.canceled));
        });

    }, [responses, sub])

    // // Already played appointments
    // useEffect(() => {
    //     let accepted = responses?.filter(a => a.accepted).map(a => a.appointmentID);
    //     if (!accepted || accepted?.length === 0) {
    //         return;
    //     }
    //     DataStore.query(Appointment, b => b.and(
    //             c => [
    //                 c.or(c => accepted?.map(a => c.id.eq(a))),
    //                 c.date.lt(getCurrentDate()),
    //                 c.confirmed.eq(true),
    //                 c.canceled.eq(false)
    //             ]), {
    //             sort: (sort) => sort.date(SortDirection.DESCENDING)
    //         }
    //     ).then((app) => {
    //         setPlayedAppointment(app);
    //     });
    //
    // }, [responses, sub])

    const tabList = [
        {title: "Rezervirano", variation: "success", data: <ReservedAppointment/>, length: reservedAppointment.length},
        {title: "U najavi", variation: "warning", data: <AcceptedAppointment/>, length: acceptedAppointment.length},
        {title: "Otkazano", variation: "error", data: <CanceledAppointment/>, length: canceledAppointment.length}
    ]

    const AppointmentTabs = () => (
        <Flex gap={"0rem"} direction={"column"} paddingTop={"0px"}>
            <Heading marginLeft={"1rem"} level={4} variation={"primary"}>Termini:</Heading>
            <Tabs
                justifyContent="flex-start">
                {tabList.map(a => (
                    <TabItem key={a.title} fontSize={"small"} title={
                        <>
                            {a.title + ' '}
                            <Badge size={"small"} variation={a.variation}>{a.length}</Badge>
                        </>
                    }>{a.data}</TabItem>))}
            </Tabs>
        </Flex>)

    const gridList = [
        {url: "/fields", icon: <FaPlusCircle color={"#2E4732"} size={"3rem"}/>, text: "Rezerviraj"},
        {url: "/profile", icon: <FaUser color={"#2E4732"} size={"3rem"}/>, text: "Profil"},
        {url: "/played", icon: <FaRunning color={"#2E4732"} size={"3rem"}/>, text: "Odigrani termini"},
        {url: "/help", icon: <FaQuestion color={"#2E4732"} size={"3rem"}/>, text: "Upute"},
    ]
    const MapToShortcut = () => {
        return (
            <Grid gap={"1rem"} marginInline={"1rem"} templateColumns="1fr 1fr">
                {gridList.map(grid => (
                    <Card key={grid.text} variation={"elevated"} onClick={() => navigate(grid?.url)}>
                        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
                            {grid.icon}
                            <Text textAlign={"center"}>{grid?.text}</Text>
                        </Flex>
                    </Card>)
                )}
            </Grid>)
    }

    const AllFields = () => {
        return (
            <Flex direction={"column"}>
                <Heading marginLeft={"1rem"} level={4} variation={"primary"}>Moji tereni:</Heading>
                <Flex direction={"column"} alignItems={"center"}>
                    {fields?.map(a => <Flex key={a.id}><FigmaField field={a}/></Flex>)}
                </Flex>
            </Flex>)
    };

    return (
        <Flex direction={"column"} gap={"1rem"} marginTop={"1rem"}>
            {user ? <AppointmentTabs/> : <LandingPage/>}
            {isOwner && <AllFields/>}
            {user && <Heading marginLeft={"1rem"} level={4} variation={"primary"}>Prečaci:</Heading>}
            {user && <MapToShortcut/>}
        </Flex>
    );

    function mapToView(appointments: [], text, noReservedText) {
        return (
            <Flex alignItems={"center"} direction={"column"} marginTop={"1rem"}>
                {appointments.length === 0 ? <Heading level={6}>{noReservedText}</Heading> :
                    appointments.map(a => {
                        return <Flex key={a.id}>
                            <FigmaAppointment appointment={a}/>
                        </Flex>;
                    })}
            </Flex>)


    }
}

export default Home;
