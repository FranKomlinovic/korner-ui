import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {DataStore} from "aws-amplify";
import {Appointment, Fields, Response} from "../models";


import {Button, Heading} from "@aws-amplify/ui-react";
import {FaLink} from "react-icons/fa";
import {CreateAppointment, CreateResponse, PlayerCardCollection} from "../ui-components";

const AppointmentView = () => {
    const {id} = useParams();
    const [appointment, setAppointment] = useState(null);
    const [field, setField] = useState(null);
    const [responses, setResponses] = useState(null);
    const daysOfWeek = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]


    useEffect(() => {
        DataStore.query(Appointment, id).then((appointment) => {
                setAppointment(appointment);
                DataStore.query(Fields, appointment.fieldsID).then((field) => {
                    setField(field)
                });
            }
        );

        DataStore.query(Response, (c) => c.and(c => [
            c.accepted.eq(true),
            c.appointmentID.eq(id)
        ])).then(a => {
            setResponses(a)
        });
    }, [id]);

    if (!field) {
        return <div>Loading...</div>;
    }

    function getDayDisplay() {
        let date = new Date(appointment.date);
        return daysOfWeek[date.getDay()] + ' ' + date.toLocaleDateString('de-DE');
    }

    return (
        <div>
            <CreateAppointment
                day={getDayDisplay()}
                appointment={appointment}
                field={field}/>
            <Button onClick={() => {
                navigator.clipboard.writeText(window.location.href)
            }}><FaLink/>
            </Button>
            <Heading> Dolaze: </Heading>
            <PlayerCardCollection items={responses}/>

        </div>

    );


}


export default AppointmentView;

