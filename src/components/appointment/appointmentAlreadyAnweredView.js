import {Button, Flex, Heading, Text} from "@aws-amplify/ui-react";
import React, {useContext, useState} from "react";
import {DataStore} from "aws-amplify";
import AlertContext from "../../context/alertContext";
import {FaTshirt} from "react-icons/fa";
import {Response} from "../../models";


const AlreadyAnsweredView = ({responseToUpdate, appointment, team, updateResponseToUpdate}) => {
    const alertContext = useContext(AlertContext);
    const [disabled, setDisabled] = useState(false);
    function updateResponse(accepted) {
        DataStore.save(Response.copyOf(responseToUpdate, (item) => {
            item.team = undefined;
            item.accepted = accepted;
        })).then(a => {
            setDisabled(true)
            updateResponseToUpdate(a);
            a.accepted ? alertContext.success("Prihvatili ste termin") :
                alertContext.warning("Odbili ste termin")
        }).catch((a) => {
            console.log(a)
            alertContext.error("Greška prihvaćanja termina, pokušajte ponovno")
        });
    }

    const commingButton = (
        <Button disabled={disabled} size={"small"} onClick={() => updateResponse(true)} variation={"primary"}>
            Dolazim
        </Button>
    )

    const notComming = (
        <Button disabled={disabled} size={"small"} onClick={() => updateResponse(false)} variation={"warning"}>
            Ne dolazim
        </Button>
    )

    if (responseToUpdate?.accepted) {
        if (team) {
            return (<Flex alignItems={"center"} justifyContent={"center"}>
                <Heading>Ekipa:</Heading>
                <FaTshirt size={"4rem"} color={team?.color}/>
                <Heading level={2}>{team?.name}</Heading>
            </Flex>)
        }
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <Heading color={"green.80"} level={3}>Dolazim</Heading>
                {!appointment?.locked &&
                    <Heading level={6}>Promijeni odgovor:</Heading>}
                <Flex>
                    {!appointment?.locked ? notComming :
                        <Text textAlign={"center"}>Odgovori su zaključani, za promjenu
                            kontaktirajte organizatora: {appointment?.bookerName}</Text>}
                </Flex>
            </Flex>
        );
    }
    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            <Heading color={"font.warning"} level={3}>Ne dolazim</Heading>
            {!appointment?.locked && <Heading level={6}>Promijeni odgovor:</Heading>}
            <Flex>
                {!appointment?.locked ? commingButton :
                    <Text textAlign={"center"}>Odgovori su zaključani, za promjenu
                        kontaktirajte organizatora: {appointment?.bookerName}</Text>}
            </Flex>
        </Flex>
    );

}

export default AlreadyAnsweredView
