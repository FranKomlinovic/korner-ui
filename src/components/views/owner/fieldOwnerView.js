import {KornerFieldShort} from "../../../ui-components";
import React, {useEffect, useState} from "react";
import {Flex, withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Fields} from "../../../models";

const FieldView = ({user}) => {

    const [fields, setFields] = useState();
    useEffect(() => {
        if (!user) {
            return;
        }
        DataStore.query(Fields, a =>
            a.ownerID.eq(user.attributes.sub)
        ).then(a => {
            setFields(a);
        })
    }, [user]);

    const allFields = () => {
        return fields.map(a => <KornerFieldShort fields={a}/>);
    };
    return (
        <Flex direction={"column"} alignItems={"center"}>
            {fields && allFields()};
        </Flex>
    );


}

export default withAuthenticator(FieldView);