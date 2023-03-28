import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Fields, Response} from "../../models";


import {Badge, Button, Divider, Flex} from "@aws-amplify/ui-react";
import KornerAppointmentInfoUpdatedWrapper from "../wrappers/kornerAppointmentInfoUpdatedWrapper";
import ReservationForm from "../components/reservationForm";
import ListUsersForAppointment from "../components/listUsersForAppointment";
import AddGuestForm from "../components/addGuestForm";

const AppointmentView = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState(null);
    const [field, setField] = useState(null);
    const [responses, setResponses] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUsername] = useState(null);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const appointment = await DataStore.query(Appointment, appointmentId);
                setAppointment(appointment);
                const field = await DataStore.query(Fields, appointment.fieldsID);
                setField(field);
                const {
                    given_name,
                    family_name,
                    sub
                } = await Auth.currentSession().then((usr) => usr.getIdToken().payload);
                setUsername(`${given_name} ${family_name}`);
                setUserId(sub);
                setIsOwner(appointment.bookerID === sub);
                const res = await DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(appointmentId)]));
                setResponses(res);
            } catch (err) {
                console.log("Error fetching data: ", err);
            }
        };
        fetchData();
    }, [appointmentId]);


    function checkIfAvailableForReservation() {
        let disabled = true;
        if (responses != null && field != null) {
            disabled = responses.filter(a => a.accepted === true).length < field.minPlayers;
        }

        return disabled;

    }

    function confirmAppointment() {
        DataStore.save(Appointment.copyOf(appointment, (item) => {
            item.confirmed = true;
        })).then(a => setAppointment(a))
    }

    function buttonOrBadge() {
        if (appointment === null) {
            return;
        }
        if (appointment.confirmed) {
            return <Badge variation={"success"}>Teren je rezerviran</Badge>;
        }
        return <Button variation={"primary"} isDisabled={checkIfAvailableForReservation()}
                       onClick={() => confirmAppointment()}>Potvrdi termin</Button>;
    }

    const renderKornerAppointmentInfo = (
        <Flex direction={"column"}>
            <KornerAppointmentInfoUpdatedWrapper
                appointment={appointment}
                field={field}
                responses={responses}
            />
            {isOwner && buttonOrBadge()}
        </Flex>
    );

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {renderKornerAppointmentInfo}
            <Divider/>
            <ReservationForm userName={userName} userId={userId} responses={responses} appointmentId={appointmentId}
                             functionTest={(a) => setResponses(a)}/>
            <Divider size={"small"}/>
            <ListUsersForAppointment responses={responses}/>
            {isOwner && <Divider size={"small"}/>}
            {isOwner && <AddGuestForm appointmentId={appointmentId} functionTest={(a) => setResponses(a)}/>}
        </Flex>
    );

}


export default AppointmentView;

