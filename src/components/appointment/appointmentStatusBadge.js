import React from "react";
import {FaTrash} from "react-icons/fa";
import {Badge, Flex, Heading} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Response} from "../../models";

import FigmaResponse from "../../figma-components/FigmaResponse";
import {getCurrentDateInDynamoDbString} from "../../functions/converters";

const AppointmentStatusBadge = ({appointment}) => {
    if (appointment?.canceled) {
        return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"error"}>Termin je
            otkazan</Badge>;
    }
    if (appointment?.confirmed) {
        if (appointment?.date < getCurrentDateInDynamoDbString(0)) {
            return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"info"}>Termin je
                odigran</Badge>;
        }
        return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"success"}>Termin je
            rezerviran</Badge>;
    }
    return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"warning"}>Termin još nije
        rezerviran</Badge>;
}

export default AppointmentStatusBadge;
