import {Card, Flex, Grid, Heading, Text} from "@aws-amplify/ui-react";
import React from "react";
import {FaPlusCircle, FaQuestionCircle, FaRunning, FaUser} from "react-icons/fa";
import {useNavigate} from "react-router-dom";


const ShortcutsComponent = () => {
    const navigate = useNavigate();

    const MapToShortcut = () => {
        return (
            <Grid gap={"1rem"} marginInline={"1rem"} templateColumns="1fr 1fr">
                {gridList.map(grid => (
                    <Card key={grid.text} variation={"elevated"} onClick={() => navigate(grid?.url)}>
                        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
                            {grid.icon}
                            <Text textAlign={"center"}>{grid?.text}</Text>
                        </Flex>
                    </Card>)
                )}
            </Grid>)
    }

    const gridList = [
        {url: "/fields", icon: <FaPlusCircle color={"#2E4732"} size={"3rem"}/>, text: "Rezerviraj"},
        {url: "/profile", icon: <FaUser color={"#2E4732"} size={"3rem"}/>, text: "Profil"},
        {url: "/played", icon: <FaRunning color={"#2E4732"} size={"3rem"}/>, text: "Odigrani termini"},
        {url: "/help", icon: <FaQuestionCircle color={"#2E4732"} size={"3rem"}/>, text: "Upute"},
    ]

    return (
        <Flex direction={"column"}>
            <Heading marginLeft={"1rem"} level={4} variation={"primary"}>Prečaci:</Heading>
            <MapToShortcut/>
        </Flex>)
}

export default ShortcutsComponent
