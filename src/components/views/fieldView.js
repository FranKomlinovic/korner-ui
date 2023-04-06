import {KornerFieldShortNoImageCollection} from "../../ui-components";
import React from "react";
import {Flex, withAuthenticator} from "@aws-amplify/ui-react";

const FieldView = () => {

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <KornerFieldShortNoImageCollection/>
        </Flex>
    );
}

export default withAuthenticator(FieldView);
