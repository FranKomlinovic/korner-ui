import React from "react";
import {Badge} from "@aws-amplify/ui-react";
import 'react-confirm-alert/src/react-confirm-alert.css';

const AppointmentStatusBadge = ({appointment, isOld}) => {
    if (appointment?.canceled) {
        return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"error"}>Termin je
            otkazan</Badge>;
    }
    if (appointment?.confirmed) {
        if (isOld) {
            return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"info"}>Termin je
                odigran</Badge>;
        }
        return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"success"}>Termin je
            rezerviran</Badge>;
    }
    if (isOld) {
        return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"error"}>Termin je
            otkazan</Badge>;
    }
    return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"warning"}>Termin još nije
        rezerviran</Badge>;
}

export default AppointmentStatusBadge;
