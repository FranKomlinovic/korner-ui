import React, {useEffect, useState} from "react";
import {Button, Flex, StepperField, SwitchField, TextField} from "@aws-amplify/ui-react";
import {Dialog, DialogTitle} from "@mui/material";
import {FaTshirt} from "react-icons/fa";
import {getFirstNTeams, suggestNextTeam} from "../../functions/suggestedTeams";
import {Response, Team} from "../../models";
import {DataStore} from "aws-amplify";

const AppointmentTeamButton = ({teams, appointment, checked, checkedFunction, responses}) => {
    const [open, setOpen] = useState(false);
    const [teamNumberToCreate, setTeamNumberToCreate] = useState(2);
    const [teamsToCreate, setTeamsToCreate] = useState([]);
    const [resps, setResps] = useState();

    const chunkIntoN = (arr, n) => {
        const size = Math.ceil(arr.length / n);
        return Array.from({length: n}, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }

    useEffect(() => {
        setTeamsToCreate(getFirstNTeams(teamNumberToCreate))
        responses &&
        setResps(chunkIntoN(responses, teamNumberToCreate))
    }, [responses, teamNumberToCreate])

    const TShirtButton = ({suggested, eKey}) => {
        const [name, setName] = useState(suggested.name);
        const [isChanged, setIsChanged] = useState(false);
        const [color, setColor] = useState(suggested.color);

        return (<Flex key={eKey} alignItems={"end"}>
            <TextField
                value={name}
                label="Ime ekipe:"
                alignSelf={"end"}
                onChange={a => {
                    setName(a.target.value)
                    suggested.name = a.target.value;
                    setIsChanged(true);
                }}
            />

            <FaTshirt onClick={() => {
                const nextTeam = suggestNextTeam(color, teamsToCreate);
                if (nextTeam) {
                    setColor(nextTeam.color)
                    suggested.color = nextTeam.color

                    if (!isChanged) {
                        suggested.name = nextTeam.name;
                        setName(nextTeam.name)
                    }
                }


            }} color={color} size={"3rem"}/>

        </Flex>)
    }

    return (
        <>
            <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Dodaj ekipe</DialogTitle>
                <Flex direction={"column"} marginBottom={"1rem"} alignItems={"center"}>
                    <Flex alignItems={"end"}>
                        <StepperField
                            max={5}
                            min={2}
                            value={teamNumberToCreate}
                            onStepChange={(a) => setTeamNumberToCreate(a)}
                            label="Broj ekipa"
                        />
                    </Flex>
                    {teamsToCreate.map((model, index) => (
                        <TShirtButton eKey={index} suggested={model}/>)
                    )}
                    <Button backgroundColor={"green.80"} variation={"primary"} onClick={() => {
                        let map = teamsToCreate.map(a =>
                            new Team({
                                    appointmentID: appointment.id,
                                    name: a.name,
                                    color: a.color
                                }
                            ));
                        map.forEach((a, v) => {
                            DataStore.save(a).then((t) => {
                                resps[v].forEach(r => {
                                    DataStore.save(Response.copyOf(r, (item) => {
                                        item.teamID = t.id;
                                    })).then();
                                })
                                setOpen(false)
                                checkedFunction(true);
                            })
                        })
                    }}>Dodaj</Button>
                </Flex>

            </Dialog>

            <SwitchField
                label="Prikaži ekipe"
                labelPosition={"end"}
                isChecked={checked}
                variation={"quiet"}
                onChange={(a) => {
                    if (teams?.length === 0 && !checked) {
                        setOpen(true);
                    } else {
                        checkedFunction(!checked)
                    }
                }}
            />
        </>)

}

export default AppointmentTeamButton
