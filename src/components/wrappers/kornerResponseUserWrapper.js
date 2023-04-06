import {KornerResponseUser} from "../../ui-components";
import React, {useEffect, useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";
import {getTimeFromTimestamp} from "../converters";
import {Storage} from "aws-amplify";

const KornerResponseUserWrapper = ({response}) => {

    const [photo, setPhoto] = useState(null);
    const [id, setId] = useState(null);
    const [icon, setIcon] = useState(null);
    const [playerName, setPlayerName] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        if (!response) {
            return;
        }
        setTime(getTimeFromTimestamp(response.updatedAt));
        setPlayerName(response.playerName)
        setId(response.id)
        let playerPhoto = response.playerPhoto;
        if (!playerPhoto) {
           playerPhoto = "player-no-photo.png"
        }
        Storage.get(playerPhoto).then(b => setPhoto(b));
        if (response.accepted) {
            setIcon(<FaPlus/>)
        } else {
            setIcon(<FaMinus/>)
        }
    }, [response]);

    return (<KornerResponseUser photo={photo} name={playerName} time={time} icon={icon} id={id}/>);


}

export default KornerResponseUserWrapper;
