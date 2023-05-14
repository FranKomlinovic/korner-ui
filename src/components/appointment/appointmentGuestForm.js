import React, {useState} from "react";
import {Button, Flex, Heading, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";
import {FaPlus} from "react-icons/fa";

const AppointmentGuestForm = ({appointment, role}) => {
    const [name, setName] = useState('');

    if (role !== "APPOINTMENT_OWNER" || appointment?.canceled) {
        return;
    }
    const saveResp = () => {
        setName("");
        DataStore.save(new Response({
            accepted: true,
            appointmentID: appointment.id,
            playerName: name,
        })).then();
    };


    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
        <Heading level={4}>Dodaj gosta</Heading>
            <Flex alignContent={"flex-end"}>
                <TextField
                    size={"small"}
                    label={"Ime i prezime"}
                    onChange={(a) => setName(a.currentTarget.value)}
                    value={name}
                />
                <Button size={"small"} isDisabled={name === ''} variation={"primary"} onClick={saveResp}>
                    <FaPlus/> Dodaj
                </Button>

            </Flex>
        </Flex>

    );

}

export default AppointmentGuestForm;
