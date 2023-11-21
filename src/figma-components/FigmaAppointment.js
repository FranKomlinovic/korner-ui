import {KornerFieldShort} from "../ui-components";
import React, {useEffect, useState} from "react";
import {getDayAndDateFromAppointment} from "../functions/converters";
import {getUrl} from "aws-amplify/storage";

const FigmaAppointment = ({appointment}) => {

    const [photo, setPhoto] = useState();
    const [field, setField] = useState();
    const [responseNumber, setResponseNumber] = useState();

    useEffect(() => {
        appointment?.Responses?.toArray().then(a => {
            setResponseNumber(a.filter(b => b.accepted).length)
        })
        appointment?.Fields?.then(a => {
            setField(a)
            a?.photo ?
                getUrl({key: a.photo}).then(b => {
                    setPhoto(b.url);
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

export default FigmaAppointment;
