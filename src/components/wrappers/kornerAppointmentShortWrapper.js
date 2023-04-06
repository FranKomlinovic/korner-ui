import {KornerAppointmentShort} from "../../ui-components";
import React, {useEffect, useState} from "react";
import {getDayAndDateFromAppointment} from "../converters";
import {Storage} from "aws-amplify";

const KornerAppointmentShortWrapper = ({appointment}) => {

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        if (!appointment) {
            return;
        }

        Storage.get(appointment.fieldPhoto).then(b => {
            setPhoto(b);
        }).catch((c) =>
            setPhoto("https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg")
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
