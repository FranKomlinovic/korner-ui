import React, {useEffect, useState} from "react";
import {FaCheck, FaMinus, FaTrash} from "react-icons/fa";
import {getTimeFromDate, getTimeFromTimestamp} from "../functions/converters";
import {DataStore, Storage} from "aws-amplify";
import {confirmAlert} from "react-confirm-alert";
import {Response} from "../models";
import {Flex, Image, Text} from "@aws-amplify/ui-react";

const FigmaResponse = ({response, user, showDelete}) => {

    const [photo, setPhoto] = useState(null);
    const [icon, setIcon] = useState(null);
    const [playerName, setPlayerName] = useState(null);
    const [time, setTime] = useState(null);

    function deleteResponse(res) {
        confirmAlert({
            title: 'Potvrdi brisanje',
            message: 'Želite li obrisati odgovor korisnika ' + res.playerName + '?',
            buttons: [
                {
                    label: 'Da',
                    onClick: () => DataStore.delete(Response, res.id)
                },
                {
                    label: 'Ne'
                }
            ]
        });
    }

    useEffect(() => {
        if (!response) {
            return;
        }
        if (response.updatedAt === null) {
            setTime(getTimeFromDate(new Date()));
        } else {
            setTime(getTimeFromTimestamp(response.updatedAt));
        }
        setPlayerName(response.playerName)
        let playerPhoto = response.playerPhoto;
        if (user && playerPhoto) {
            Storage.get(playerPhoto).then(b => setPhoto(b))
                .catch(() => {
                    setPhoto("/no-picture.png")
                });
        } else {
            response.playerID ? setPhoto("/no-picture.png") : setPhoto("/no-player.png")
        }

        if (response.accepted) {
            setIcon(<FaCheck size={"1.2rem"} color={"green"}/>)
        } else {
            setIcon(<FaMinus size={"1.2rem"} color={"darkRed"}/>)
        }
    }, [response, user]);

    return (
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={"0.2rem"}>
                <Image src={photo} borderRadius={400} objectFit={"cover"} width={"2rem"} height={"2rem"}
                       color={"white"} alt={"Slika"}/>
                <Text fontSize={"large"}>{playerName}</Text>
            </Flex>
            <Flex gap={"0.5rem"} paddingRight={"0.2rem"}>
                <Text fontSize={"small"}>{time}</Text>
                {icon}
                {showDelete && <FaTrash size={"1.2rem"} onClick={() => deleteResponse(response)} color={"darkred"}/>}
            </Flex>
        </Flex>)
}

export default FigmaResponse;
