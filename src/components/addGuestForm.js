import React, {useState} from "react";
import {Button, Flex, TextField} from "@aws-amplify/ui-react";
import {Response} from "../models";
import {DataStore} from "aws-amplify";
import {FaPlus} from "react-icons/fa";

const AddGuestForm = ({appointmentId}) => {
    const [name, setName] = useState('');

    const saveResp = () => {
        setName("");
        DataStore.save(new Response({
            accepted: true,
            appointmentID: appointmentId,
            playerName: name,
        }));
    };


    return (
        <Flex direction={"column"}>
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

export default AddGuestForm;
