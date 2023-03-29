import {KornerAppointmentInfoUpdated} from "../../ui-components";
import React from "react";
import {calculateDurationFromAppointment, convertSportsEnumToString, getDateTimeFromAppointment} from "../converters";

const KornerAppointmentInfoUpdatedWrapper = ({field, appointment, responses}) => {

    const somethingMissing = field === null || appointment === null;

    if (somethingMissing) {
        return;
    }
    let test = 0;
    if (responses != null) {
        test = responses.filter(a => a.accepted === true).length
    }

    return (
        <KornerAppointmentInfoUpdated fields={field} time={getDateTimeFromAppointment(appointment)}
                                      appointment={appointment}
                                      pricePerPerson={field.price / field.minPlayers}
                                      acceptedNumber={test}
                                      duration={calculateDurationFromAppointment(appointment)}
                                      sport={convertSportsEnumToString(appointment.sport)}/>
    );


}

export default KornerAppointmentInfoUpdatedWrapper;
