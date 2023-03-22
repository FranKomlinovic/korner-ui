import {API} from "aws-amplify";
import React, {useEffect, useState} from "react";
import FieldDetails from "./fieldDetails";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {Divider, Heading} from "@aws-amplify/ui-react";

const FreeAppointments = (fieldId) => {
    const [appointments, setAppointments] = useState();
    const [displayAppointments, setDisplayAppointments] = useState(null);

    useEffect(() => {
        API.get('availableAppointments', '/appointments/available/' + fieldId.fieldId).then(
            a => {
                setAppointments(a);
                setDisplayAppointments(a.today);
            }
        )
    }, [fieldId.fieldId]);

    if (!displayAppointments) {
        return <div>Loading...</div>;
    }

    function displayDay(test: number) {
        switch (test) {
            case 1:
                setDisplayAppointments(appointments.tomorrow);
                return;
            case 2:
                setDisplayAppointments(appointments.dayAfter);
                return;
            default:
                setDisplayAppointments(appointments.today);
                return;
        }
    }

    return (
        <div>
            <h2>Rezerviraj termin</h2>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Odaberi dan</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="today"
                    name="radio-buttons-group"
                    row
                >
                    <FormControlLabel value="today" onClick={() => displayDay(0)} control={<Radio/>} label="Danas"/>
                    <FormControlLabel value="tomorrow" onClick={() => displayDay(1)} control={<Radio/>} label="Sutra"/>
                    <FormControlLabel value="dayAfter" onClick={() => displayDay(2)} control={<Radio/>}
                                      label="Prekosutra"/>
                </RadioGroup>
            </FormControl>
            <Heading level={4}>1h</Heading>
            <FieldDetails items={displayAppointments.oneHour}></FieldDetails>
            <Divider orientation="horizontal"/>
            <Heading>1.5h</Heading>
            <FieldDetails items={displayAppointments.oneAndHalfHour}></FieldDetails>
            <Divider orientation="horizontal"/>
            <Heading>2h</Heading>
            <FieldDetails items={displayAppointments.twoHour}></FieldDetails>
            <Divider orientation="horizontal"/>
        </div>
    )
}

export default FreeAppointments;
