import React, {useEffect, useState} from "react";
import {Flex, Image, Text} from "@aws-amplify/ui-react";
import {getUrl} from "aws-amplify/storage";

const FigmaTeamPlayer = ({myKey, response}) => {

    const [photo, setPhoto] = useState(null);
    const [playerName, setPlayerName] = useState(null);

    useEffect(() => {
        setPlayerName(response?.playerName)
        let playerPhoto = response?.playerPhoto;
        if (playerPhoto) {
            getUrl({key: playerPhoto}).then(b => setPhoto(b.url))
                .catch(() => {
                    setPhoto("/no-picture.png")
                });
        } else {
            response.playerID ? setPhoto("/no-picture.png") : setPhoto("/no-player.png")
        }
    }, [response]);

    return (
        <Flex key={myKey} width={"4rem"} gap={"0.2rem"} alignItems={"center"} direction={"column"}>
            <Image src={photo} borderRadius={400} objectFit={"cover"} width={"3rem"} height={"3rem"}
                   color={"white"} alt={"Slika"}/>
            <Text height={"3rem"} textAlign={"center"} fontSize={"smaller"}>{playerName}</Text>
        </Flex>
    )
}

export default FigmaTeamPlayer;
