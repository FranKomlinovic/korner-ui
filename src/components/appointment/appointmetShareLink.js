import {Tooltip} from "@mui/material";
import {Button, Flex, Heading} from "@aws-amplify/ui-react";
import {FaCopy} from "react-icons/fa";
import React, {useState} from "react";
import {getDayAndDateFromAppointment} from "../../functions/converters";
import {ViberIcon, ViberShareButton, WhatsappIcon, WhatsappShareButton} from "react-share";

const AppointmentShareLink = ({appointment, field}) => {
    const [open, setOpen] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(copyLink()).then(() => setOpen(true))
    }

    function copyLink(): string {
        return "Skupljamo se za termin:\n" + field?.name + "\n" + getDayAndDateFromAppointment(appointment?.date) + "\n" + appointment?.start + " - " + appointment?.end + " \n\nOdgovori na ovoj poveznici:\n" + window.location.href + "\n";

    }

    return !appointment?.locked && <Flex direction={"column"} alignItems={"center"}>
        <Heading>Pozovi prijatelje</Heading>
        <Flex>
            <Tooltip onClose={() => setOpen(false)} open={open} leaveTouchDelay={2200}
                     title={"Pozivnica kopirana, pošaljite ju prijateljima"}>
                <Button padding={"0px"} border={"none"} backgroundColor={"transparent"}
                        onClick={() => copyToClipboard()}><FaCopy size={"2rem"}/></Button>
            </Tooltip>
            <WhatsappShareButton url={copyLink()}><WhatsappIcon round size={"2rem"}/> </WhatsappShareButton>
            <ViberShareButton url={copyLink()}><ViberIcon round size={"2rem"}/> </ViberShareButton>
        </Flex>

    </Flex>
}

export default AppointmentShareLink
