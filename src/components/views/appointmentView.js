import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Auth, DataStore} from "aws-amplify";
import {Appointment, Fields, Response} from "../../models";


import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {KornerAppointmentInfoUpdated, KornerResponseUser} from "../../ui-components";
import {
    calculateDurationFromAppointment,
    convertSportsEnumToString,
    getDateTimeFromAppointment,
    getTimeFromTimestamp
} from "../converters";
import {FaCheck, FaCrop, FaQuestion} from "react-icons/fa";

const AppointmentView = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState(null);
    const [field, setField] = useState(null);
    const [responses, setResponses] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        DataStore.query(Appointment, appointmentId).then((appointment) => {
                setAppointment(appointment);
                console.log(appointment);
                DataStore.query(Fields, appointment.fieldsID).then((field) => {
                    setField(field)
                });
            }
        );

        DataStore.query(Response, (c) => c.and(c => [
            c.appointmentID.eq(appointmentId)
        ])).then(a => {
            setResponses(a)
        });

        Auth.currentSession().then(usr => {
            let payload = usr.getIdToken().payload;
            setUsername(payload.given_name + ' ' + payload.family_name)
            setUserId(payload.sub);
        });
    }, [appointmentId]);

    function mapResponseToComponent(res: Response) {
        let time = getTimeFromTimestamp(res.updatedAt);
        let icon = <FaCrop/>
        if (res.accepted) {
            if (res.reserve) {
                icon = <FaQuestion/>
            }
            icon = <FaCheck/>
        }
        return (<KornerResponseUser name={res.playerName} time={time} icon={icon}/>)
    }

    function createResponse(reserve, accepted) {
        let response = new Response({
            playerID: userId,
            accepted: accepted,
            reserve: reserve,
            appointmentID: appointmentId,
            playerName: userName
        });

        DataStore.save(response).then(a => {
            DataStore.query(Response, (c) => c.and(c => [
                c.appointmentID.eq(a.appointmentID)
            ])).then(a => {
                setResponses(a)
            });
        });
    }

    function createForm() {
        if (responses.find(a => a.playerID === userId)) {
            return <Heading>Odgovorili ste</Heading>
        } else {
            return <Flex direction={"column"}>
                <TextField label={"Ime i prezime"} onChange={(a) => setUsername(a.currentTarget.value)}
                           defaultValue={userName}/>
                <Flex>
                    <Button variation={"primary"} onClick={() => createResponse(false, true)}>Dolazim</Button>
                    <Button onClick={() => createResponse(true, true)}>Ako fali</Button>
                    <Button onClick={() => createResponse(false, false)} variation={"warning"}>Ne Dolazim</Button>
                </Flex>
            </Flex>
        }


    }

    return (
        <Flex direction={"column"} alignItems={"center"}>
            {field != null && appointment != null &&
                <KornerAppointmentInfoUpdated fields={field} time={getDateTimeFromAppointment(appointment)}
                                              pricePerPerson={field.price / field.minPlayers} acceptedNumber={0}
                                              duration={calculateDurationFromAppointment(appointment)}
                                              sport={convertSportsEnumToString(appointment.sport)}/>
            }
            {responses != null && userId != null && createForm()}
            <Heading> Dolaze: </Heading>
            {responses != null && responses.map(r => mapResponseToComponent(r))}

        </Flex>

    );


}


export default AppointmentView;

