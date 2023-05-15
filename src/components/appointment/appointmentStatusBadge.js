import React from "react";
import {Badge} from "@aws-amplify/ui-react";
import 'react-confirm-alert/src/react-confirm-alert.css';

// unreserved, reserved, canceled, played
const AppointmentStatusBadge = ({appointmentStatus}) => {
    const badgeOptions = [
        {status: "unreserved", message: "Termin još nije rezerviran", variation: "warning"},
        {status: "reserved", message: "Termin je rezerviran", variation: "success"},
        {status: "canceled", message: "Termin je otkazan", variation: "error"},
        {status: "played", message: "Termin je odigran", variation: "info"},
    ]

    let find = badgeOptions.find(a => a.status === appointmentStatus);

    return (
        <Badge size={"large"} textAlign={"center"} alignSelf={"center"}
               variation={find?.variation}>{find?.message}</Badge>)

}

export default AppointmentStatusBadge;
