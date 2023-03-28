import {KornerAppointmentInfoUpdated} from "../../ui-components";
import React from "react";
import {calculateDurationFromAppointment, convertSportsEnumToString, getDateTimeFromAppointment} from "../converters";

const KornerAppointmentInfoUpdatedWrapper = ({field, appointment, responses}) => {

    const somethingMissing = field === null || appointment === null || responses === null;

    if (somethingMissing) {
        return;
    }

    return (
        <KornerAppointmentInfoUpdated fields={field} time={getDateTimeFromAppointment(appointment)}
                                      appointment={appointment}
                                      pricePerPerson={field.price / field.minPlayers}
                                      acceptedNumber={responses.filter(a => a.accepted === true).length}
                                      duration={calculateDurationFromAppointment(appointment)}
                                      sport={convertSportsEnumToString(appointment.sport)}/>
    );


}

export default KornerAppointmentInfoUpdatedWrapper;
