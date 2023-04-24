import {KornerFieldShort} from "../../ui-components";
import React, {useEffect, useState} from "react";
import {getDayAndDateFromAppointment} from "../converters";
import {Storage} from "aws-amplify";

const KornerAppointmentShortWrapper = ({appointment}) => {

    const [photo, setPhoto] = useState("/no-field.jpg");
    const [field, setField] = useState();
    const [responseNumber, setResponseNumber] = useState();

    useEffect(() => {
        appointment?.Responses.toArray().then(a => {
            setResponseNumber(a.filter(b => b.accepted).length)
        })
        appointment?.Fields.then(a => {
            setField(a)
            a.photo ?
                Storage.get(a.photo).then(b => {
                    setPhoto(b);
                }) :
                setPhoto("/no-field.jpg")

        })


    }, [appointment]);


    return (
        <KornerFieldShort
            responseNumber={responseNumber}
            photo={photo}
            fields={field}
            date={getDayAndDateFromAppointment(appointment?.date)}
            appointment={appointment}/>
    );


}

export default KornerAppointmentShortWrapper;
