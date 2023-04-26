import {KornerResponseUser} from "../ui-components";
import React, {useEffect, useState} from "react";
import {FaCheck, FaMinus} from "react-icons/fa";
import {getTimeFromDate, getTimeFromTimestamp} from "../functions/converters";
import {Storage} from "aws-amplify";

const FigmaResponse = ({response, user}) => {

    const [photo, setPhoto] = useState(null);
    const [id, setId] = useState(null);
    const [icon, setIcon] = useState(null);
    const [playerName, setPlayerName] = useState(null);
    const [time, setTime] = useState(null);

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
        setId(response.id)
        let playerPhoto = response.playerPhoto;
        if (user && playerPhoto) {
            Storage.get(playerPhoto).then(b => setPhoto(b))
                .catch(() => {
                    setPhoto("/no-picture.png")
                });
        } else {
            response.playerID ? setPhoto("/no-picture.png") :  setPhoto("/no-player.png")
        }

        if (response.accepted) {
            setIcon(<FaCheck/>)
        } else {
            setIcon(<FaMinus/>)
        }
    }, [response]);

    return (<KornerResponseUser photo={photo} name={playerName} time={time} icon={icon} id={id}/>);


}

export default FigmaResponse;
