import React, {useState} from "react";
import {Button, Divider, Flex, TextField} from "@aws-amplify/ui-react";
import {Response} from "../../models";
import {DataStore} from "aws-amplify";

const AddGuestForm = ({appointmentId, functionTest}) => {
    const [name, setName] = useState('');

    if (appointmentId === null || functionTest === null) {
        return;
    }

    const saveResp = () => {
        console.log(appointmentId);
        const response = new Response({
            accepted: true,
            reserve: true,
            appointmentID: appointmentId,
            playerName: name,
        });
        DataStore.save(response).then((a) => {
            DataStore.query(Response, (c) => c.and(c => [c.appointmentID.eq(a.appointmentID)]))
                .then((a) => functionTest(a));
        });
    };


    return (
        <Flex direction={"column"}>
            <Flex alignContent={"flex-end"} justifyContent={"center"}>
                <TextField
                    label={"Ime i prezime"}
                    onChange={(a) => setName(a.currentTarget.value)}
                    defaultValue={name}
                />
                <Button size={"small"} isDisabled={name === ''} variation={"primary"} onClick={() => saveResp()}>
                    Dodaj gosta
                </Button>

            </Flex>
        </Flex>

    );

}

export default AddGuestForm;
