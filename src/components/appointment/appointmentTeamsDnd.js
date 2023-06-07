import React, {useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Button, Collection, Flex, Heading, ScrollView, SwitchField} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Response, Team} from "../../models";
import {suggestNextTeam} from "../../functions/suggestedTeams";
import {FaPlus, FaTshirt} from "react-icons/fa";
import {SortDirection} from "@aws-amplify/datastore";
import FigmaTeamPlayer from "../../figma-components/FigmaTeamPlayer";

const AppointmentTeamsDnd = ({tms, appointmentID, isOwner}) => {
    const [state, setState] = useState([]);
    const [responses, setResponses] = useState([]);
    const [showDnd, setShowDnd] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let msps = await Promise.all(
                tms.map(async (a) => {
                    const obje = {team: a};
                    obje.responses = await DataStore.query(Response, (c) => c.and(e => [
                        e.teamID.eq(a.id),
                        e.accepted.eq(true),
                        e.appointmentID.eq(appointmentID)
                    ]), {
                        sort: (sort) => sort.updatedAt(SortDirection.DESCENDING)
                    });
                    return obje;
                })
            );

            DataStore.query(Response, (c) => c.and(e => [
                e.teamID.eq(undefined),
                e.accepted.eq(true),
                e.appointmentID.eq(appointmentID)
            ]), {
                sort: (sort) => sort.updatedAt(SortDirection.DESCENDING)
            }).then(a => {
                setResponses({responses: a})
            });

            setState(msps);
        };

        fetchData();
    }, [appointmentID, tms]);


    /**
     * Moves an item from one list to another list.
     */
    const move = (source, destination, droppableSource, droppableDestination, draggableId) => {
        const sourceClone = Array.from(source?.responses);
        const destClone = Array.from(destination?.responses);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        DataStore.query(Response, draggableId).then(a => {
            DataStore.save(Response.copyOf(a, b => {
                b.teamID = destination.team?.id
            }))
        })

        const result = {};
        result[droppableSource.droppableId] = {team: source.team, responses: sourceClone};
        result[droppableDestination.droppableId] = {team: destination.team, responses: destClone};

        return result;
    };


    function onDragEnd(result) {
        const {source, destination, draggableId} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        const sourceState = state[sInd] ? state[sInd] : responses;
        const destinationState = state[dInd] ? state[dInd] : responses;
        if (sInd === dInd) {
            //TODO fixati logiku
            // const items = reorder(state[sInd], source.index, destination.index);
            // const newState = [...state];
            // newState[sInd] = items;
            // setState(newState);
        } else {
            const result = move(sourceState, destinationState, source, destination, draggableId);
            const newState = [...state];
            newState[dInd] = result[dInd];
            newState[sInd] = result[sInd];

            if (result[sInd].team && result[sInd].responses.length === 0) {
                DataStore.query(Team, result[sInd].team.id).then(a => {
                    DataStore.delete(a);
                });
            }

            const noTeamResponses = newState.find(a => !a.team)
            setResponses({responses: noTeamResponses ? noTeamResponses.responses : []})
            setState(newState.filter(a => a.team))
        }
    }

    const NoAdminView = () => {
        return state.map((a,b) => {
            return (
                <Flex key={b} direction={"column"} alignItems={"center"}>
                    <Flex alignItems={"center"}>
                        <FaTshirt size={"2rem"} color={a.team?.color}/>
                        <Heading level={5} textAlign={"center"}>{a.team?.name} ({a.responses?.length})</Heading>
                    </Flex>
                    <Collection type="grid" templateColumns="1fr 1fr 1fr 1fr 1fr" items={a.responses}
                                justifyContent={"space-between"} alignItems={"center"}>
                        {(item, index) => {
                            return (
                                <FigmaTeamPlayer response={item}/>
                            );
                        }}
                    </Collection>

                </Flex>
            )
        })
    }

    const AdminView = () => {
        return (
            <Flex direction="column">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Flex alignSelf="start" alignItems="start" direction="column">
                        <Droppable
                            direction="horizontal"
                            key={state.length}
                            droppableId={`${state.length}`}
                        >
                            {(provided, snapshot) => (
                                <Flex
                                    gap="0rem"
                                    ref={provided.innerRef}
                                    style={{
                                        background: snapshot.isDraggingOver ? "#D6F5DB" : "white",
                                        padding: 12,
                                        opacity: snapshot.isDraggingOver && 0.2,
                                    }}
                                    {...provided.droppableProps}
                                    alignItems="center"
                                >
                                    <ScrollView height="inherit" width="inherit" maxWidth="300px">
                                        <Flex>
                                            {responses?.responses?.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <Flex
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={provided.draggableProps.style}
                                                        >
                                                            <FigmaTeamPlayer response={item}/>
                                                        </Flex>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </Flex>
                                    </ScrollView>
                                </Flex>
                            )}
                        </Droppable>
                    </Flex>
                    <Flex alignItems="start" justifyContent="space-evenly" gap="0.1rem">
                        {state.map((el, ind) => (
                            <Flex alignItems="center" direction="column">
                                <Flex direction="column" alignItems="center">
                                    <FaTshirt size="2rem" color={el.team?.color}/>
                                    <Heading textAlign="center">
                                        {el.team?.name} ({el.responses?.length})
                                    </Heading>
                                </Flex>
                                <Droppable key={ind} droppableId={`${ind}`}>
                                    {(provided, snapshot) => (
                                        <Flex
                                            gap="0.5rem"
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver
                                                    ? el.team.color + "60"
                                                    : "white",
                                                opacity: snapshot.isDraggingOver && 0.2,
                                            }}
                                            {...provided.droppableProps}
                                            direction="column"
                                            alignItems="center"
                                        >
                                            {el.responses?.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <Flex
                                                            padding="0px"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={provided.draggableProps.style}
                                                        >
                                                            <FigmaTeamPlayer response={item}/>
                                                        </Flex>
                                                    )}
                                                </Draggable>
                                            ))}
                                            <Flex width="4rem" height="4rem"></Flex>
                                            {provided.placeholder}
                                        </Flex>
                                    )}
                                </Droppable>
                            </Flex>
                        ))}
                        {state.length <= 3 && (
                            <Button
                                isDisabled={state.length > 3}
                                padding="0.5rem"
                                alignItems="center"
                                size="2rem"
                                variation="primary"
                                onClick={() => {
                                    let t = suggestNextTeam("#EDF1FF", tms);
                                    t.appointmentID = appointmentID;
                                    DataStore.save(new Team(t));
                                }}
                            >
                                <FaPlus size="1rem"/>
                            </Button>
                        )}
                    </Flex>
                </DragDropContext>
            </Flex>
        );
    };

    return (
        <Flex direction={"column"}>
            {isOwner && <SwitchField
                label="Uredi ekipe"
                labelPosition={"end"}
                isChecked={showDnd}
                variation={"quiet"}
                onChange={(a) => {
                    setShowDnd(a.target.checked)
                }}
            />}
            {showDnd ? AdminView() : NoAdminView()}
        </Flex>)

}

export default AppointmentTeamsDnd
