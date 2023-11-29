import {Flex, Heading} from "@aws-amplify/ui-react";
import FigmaField from "../figma-components/FigmaField";
import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify/datastore';

import {Fields} from "../models";


const OwnerFieldListComponent = ({user}) => {

    const [fields, setFields] = useState();

    //Gets owners fields
    useEffect(() => {
        user?.cognitoID && DataStore.query(Fields, a =>
            a.ownerID.eq(user?.cognitoID)
        ).then(b => {
            setFields(b);
        })
    }, [user]);

    return (
        fields?.length > 0 &&
        <Flex direction={"column"}>
            <Heading marginLeft={"1rem"} level={4} variation={"primary"}>Moji tereni:</Heading>
            <Flex direction={"column"} alignItems={"center"}>
                {fields?.map(a => <Flex key={a.id}><FigmaField field={a}/></Flex>)}
            </Flex>
        </Flex>)
}

export default OwnerFieldListComponent
