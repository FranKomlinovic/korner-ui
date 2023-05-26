import React, {useEffect, useState} from "react";
import {FaTshirt} from "react-icons/fa";
import {Storage} from "aws-amplify";
import {Flex, Heading, Image, MenuItem, Text} from "@aws-amplify/ui-react";

const FigmaTeamPlayer = ({response, team, teams}) => {

    const [photo, setPhoto] = useState(null);
    const [playerName, setPlayerName] = useState(null);

    useEffect(() => {
        setPlayerName(response?.playerName)
        let playerPhoto = response?.playerPhoto;
        if (playerPhoto) {
            Storage.get(playerPhoto).then(b => setPhoto(b))
                .catch(() => {
                    setPhoto("/no-picture.png")
                });
        } else {
            response.playerID ? setPhoto("/no-picture.png") : setPhoto("/no-player.png")
        }
    }, [response]);

    return (
        <Flex alignItems={"center"}>
            <Flex gap={"0.2rem"} alignItems={"center"} direction={"column"}>
                <Image src={photo} borderRadius={400} objectFit={"cover"} width={"3rem"} height={"3rem"}
                       color={"white"} alt={"Slika"}/>
                <Text textAlign={"center"} fontSize={"small"}>{playerName}</Text>
            </Flex>
            {/*{*/}
            {/*    teams.map(a => {*/}
            {/*        return (<Flex direction={"column"}>*/}
            {/*            <FaTshirt color={a.color}/>*/}
            {/*            <Heading>{a.name}</Heading>*/}
            {/*        </Flex>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </Flex>)
}

export default FigmaTeamPlayer;
