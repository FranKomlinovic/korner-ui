import {KornerAppointmentShort} from "../../ui-components";
import React, {useEffect, useState} from "react";
import {getDayAndDateFromAppointment} from "../converters";
import {Storage} from "aws-amplify";

const KornerAppointmentShortWrapper = ({appointment}) => {

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        Storage.get(appointment?.fieldPhoto).then(b => {
            setPhoto(b);
        }).catch(() =>
            setPhoto("/no-field.jpg")
        )

    }, [appointment]);


    return (
        <KornerAppointmentShort
            photo={photo}
            date={getDayAndDateFromAppointment(appointment.date)}
            appointment={appointment}/>
    );


}

export default KornerAppointmentShortWrapper;
