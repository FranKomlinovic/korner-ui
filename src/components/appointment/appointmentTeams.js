import React, {useEffect, useState} from "react";
import {Flex, Grid, Heading} from "@aws-amplify/ui-react";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {FaTshirt} from "react-icons/fa";
import FigmaTeamPlayer from "../../figma-components/FigmaTeamPlayer";

const AppointmentTeams = ({teams}) => {

    const TeamView = ({team}) => {
        const [responses, setResponses] = useState();

        useEffect(() => {
            team && team?.Responses?.toArray().then(a => {
                setResponses(a)
            })
        }, [team])
        return (
            <Flex direction={"column"}>
                <Flex gap={"0.2rem"} alignItems={"end"}>
                    <FaTshirt size={"2rem"} color={team?.color}/>
                    <Heading level={5}>{team?.name}</Heading>
                    <Heading level={5}>({responses?.length})</Heading>
                </Flex>
                <Grid templateColumns="1fr 1fr 1fr">
                    {responses?.map(a => {
                            return (

                                <FigmaTeamPlayer response={a} team={team} teams={teams}></FigmaTeamPlayer>
                            )
                        }
                    )}
                </Grid>

            </Flex>
        )
    }


    return (
        <Flex marginTop={"0.5rem"} direction={"column"}>
            {teams.map(a => (
                <TeamView team={a}/>
            ))}

        </Flex>
    )


}

export default AppointmentTeams;
