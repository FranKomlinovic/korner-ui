import React, {useEffect, useState} from "react";
import {Collection, Flex, Heading, Text, TextField, withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Fields} from "../../models";
import FigmaFieldInfoView from "../../figma-components/FigmaFIeldInfoView";

const FieldView = () => {
    const [fields, setFields] = useState()
    const [filter, setFilter] = useState()

    // Gets field by id
    useEffect(() => {
        filter ?
            DataStore.query(Fields, (c) =>
                c.or(c => [
                    c.name.contains(filter),
                    c.address.contains(filter)
                ])).then((a) => {
                setFields(a);
            }) :
            DataStore.query(Fields).then((a) => {
                setFields(a);
            })
    }, [filter]);

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Flex justifyContent={"stretch"} alignItems={"center"}>
                <TextField labelHidden={true} label={"Tereni"} placeholder={"Pretraži..."}
                           onChange={(a) => setFilter(a.currentTarget.value)}/>
            </Flex>
            <Collection items={fields}>
                {(item, index) => (
                    <Flex key={item.id}>
                        <FigmaFieldInfoView field={item}/>
                    </Flex>
                )}
            </Collection>
        </Flex>
    );
};

export default withAuthenticator(FieldView);
