import {KornerAppointmentInfoUpdated} from "../../ui-components";
import React, {useEffect, useState} from "react";
import {calculateDurationFromAppointment, convertSportsEnumToString, getDateTimeFromAppointment} from "../converters";
import {Storage} from "aws-amplify";

const KornerAppointmentInfoUpdatedWrapper = ({appointment, responses}) => {

    const [photo, setPhoto] = useState(null);

    const somethingMissing = !appointment || !responses || !photo;

    useEffect(() => {
        Storage.get(appointment?.fieldPhoto).then(b => {
            setPhoto(b);
        }).catch(() =>
            setPhoto("/no-field.jpg")
        )

    }, [appointment]);

    if (somethingMissing) {
        return;
    }


    return (
        <KornerAppointmentInfoUpdated time={getDateTimeFromAppointment(appointment)}
                                      appointment={appointment}
                                      pricePerPerson={appointment?.price / appointment?.minPlayers}
                                      photo={photo}
                                      acceptedNumber={responses?.filter(a => a.accepted === true).length}
                                      duration={calculateDurationFromAppointment(appointment)}
                                      sport={convertSportsEnumToString(appointment?.sport)}/>
    );


}

export default KornerAppointmentInfoUpdatedWrapper;
