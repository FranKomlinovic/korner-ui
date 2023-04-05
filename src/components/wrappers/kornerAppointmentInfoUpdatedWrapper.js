import {KornerAppointmentInfoUpdated} from "../../ui-components";
import React, {useEffect, useState} from "react";
import {calculateDurationFromAppointment, convertSportsEnumToString, getDateTimeFromAppointment} from "../converters";
import {Storage} from "aws-amplify";

const KornerAppointmentInfoUpdatedWrapper = ({field, appointment, responses}) => {

    const [photo, setPhoto] = useState(null);

    const somethingMissing = field === null || appointment === null || responses === null || photo === null;

    useEffect(() => {
        if (appointment === null) {
            return;
        }

        Storage.get(appointment.fieldPhoto).then(b => {
            setPhoto(b);
        }).catch((c) =>
            setPhoto("https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg")
        )

    }, [appointment]);

    if (somethingMissing) {
        return;
    }


    return (
        <KornerAppointmentInfoUpdated fields={field} time={getDateTimeFromAppointment(appointment)}
                                      appointment={appointment}
                                      pricePerPerson={field.price / field.minPlayers}
                                      photo={photo}
                                      acceptedNumber={responses.filter(a => a.accepted === true).length}
                                      duration={calculateDurationFromAppointment(appointment)}
                                      sport={convertSportsEnumToString(appointment.sport)}/>
    );


}

export default KornerAppointmentInfoUpdatedWrapper;
