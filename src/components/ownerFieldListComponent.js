import {Flex, Heading} from "@aws-amplify/ui-react";
import FigmaField from "../figma-components/FigmaField";
import React, {useEffect, useState} from "react";
import {checkIfInOwnerGroup} from "../functions/converters";
import {DataStore} from "aws-amplify";
import {Fields} from "../models";


const OwnerFieldListComponent = ({user}) => {

    const [fields, setFields] = useState();
    const [isOwner, setIsOwner] = useState(false);

    const sub = user?.attributes.sub;

    //Checks if user is in owner group
    useEffect(() => {
        setIsOwner(checkIfInOwnerGroup(user));
    }, [user]);

    //Gets owners fields
    useEffect(() => {
        if (isOwner) {
            DataStore.query(Fields, a =>
                a.ownerID.eq(sub)
            ).then(a => {
                setFields(a);
            })
        }
    }, [isOwner, sub]);

    return (
        isOwner &&
        <Flex direction={"column"}>
            <Heading marginLeft={"1rem"} level={4} variation={"primary"}>Moji tereni:</Heading>
            <Flex direction={"column"} alignItems={"center"}>
                {fields?.map(a => <Flex key={a.id}><FigmaField field={a}/></Flex>)}
            </Flex>
        </Flex>)
}

export default OwnerFieldListComponent
