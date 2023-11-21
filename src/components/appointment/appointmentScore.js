import React, {useState} from "react";
import {Dialog, DialogTitle} from "@mui/material";
import {Button, Flex, Heading, StepperField} from "@aws-amplify/ui-react";
import {FaQuestion, FaTrophy, FaTshirt} from "react-icons/fa";
import {DataStore} from 'aws-amplify/datastore';
import {Team} from "../../models";

const AppointmentScore = ({teams, role}) => {
    const [open, setOpen] = useState(false)

    const DisplayScore = ({team, isWinner}) => {

        isWinner = team.score > [...teams].sort((tm, tm2) => tm2.score - tm.score)[1].score
        return (
            <>
                <Flex alignItems={"center"}>
                    <FaTshirt size={"2rem"} color={team.color}/>
                    <Heading>{team.name}</Heading>
                </Flex>
                <Flex alignItems={"center"}>
                    <Heading level={4}>{team.score ? team.score : <FaQuestion/>}</Heading>
                    <FaTrophy size={"2rem"} color={isWinner ? "gold" : "transparent"}/>
                </Flex>
            </>
        )
    }

    const EditScore = ({team, score, onScoreChange}) => {
        return (
            <Flex key={team.id} alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <FaTshirt size="2rem" color={team.color}/>
                    <Heading>{team.name}</Heading>
                </Flex>
                <Flex alignItems="center">
                    <StepperField
                        max={100}
                        min={0}
                        step={1}
                        value={score}
                        size="small"
                        label="Rezultat"
                        variation="quiet"
                        labelHidden
                        alignItems="center"
                        onStepChange={num => onScoreChange(num)}
                    />
                </Flex>
            </Flex>
        );
    };

    const ScoreDialog = () => {
        const [scores, setScores] = useState(teams?.map(team => team.score));

        const handleScoreChange = (index, score) => {
            const newScores = [...scores];
            newScores[index] = score;
            setScores(newScores);
        };

        const handleSaveScores = () => {
            // Save scores and trigger the update logic
            teams.forEach((team, index) => {
                DataStore.save(Team.copyOf(team, a => {
                    a.score = scores[index] ? scores[index] : 0;
                })).then(() => {
                    setOpen(false);
                });
            });
        };

        return (
            <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Dodaj rezultat</DialogTitle>
                <Flex margin="1rem" direction="column">
                    {teams?.map((team, index) => (
                        <EditScore
                            key={team.id}
                            team={team}
                            score={scores[index]}
                            onScoreChange={score => handleScoreChange(index, score)}
                        />
                    ))}
                    <Button alignSelf="center" onClick={handleSaveScores}>
                        Dodaj rezultat
                    </Button>
                </Flex>
            </Dialog>
        );
    };

    return (
        <Flex direction={"column"}>
            <Heading level={4}>Rezultat:</Heading>
            {teams?.map((a) => (
                <Flex key={a.id} alignItems={"center"} justifyContent={"space-between"}>
                    <DisplayScore team={a}/>
                </Flex>
            ))}

            {role === "APPOINTMENT_OWNER" &&
                <Button alignSelf={"center"} onClick={() => setOpen(true)}>Uredi rezultat</Button>}
            <ScoreDialog/>
        </Flex>

    )
}

export default AppointmentScore
