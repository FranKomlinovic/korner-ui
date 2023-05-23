import {Tooltip} from "@mui/material";
import {Button} from "@aws-amplify/ui-react";
import {FaLink} from "react-icons/fa";
import React, {useState} from "react";
import {getDayAndDateFromAppointment} from "../../functions/converters";

const AppointmentShareLink = ({appointment, field}) => {
    const [open, setOpen] = useState(false);

    function copyLink() {
        navigator.clipboard.writeText(
            "Skupljamo se za termin:\n" + field?.name + "\n" + getDayAndDateFromAppointment(appointment?.date) + "\n" + appointment?.start + " - " + appointment?.end + " \n\nOdgovori na ovoj poveznici:\n" + window.location.href + "\n")
        setOpen(true)
    }

    return !appointment?.locked && <Tooltip onClose={() => setOpen(false)} open={open} leaveTouchDelay={1200}
                                           title={"Link kopiran"}>
        <Button backgroundColor={"white"} onClick={copyLink}><FaLink/> Pozovi prijatelje</Button>
    </Tooltip>
}

export default AppointmentShareLink
