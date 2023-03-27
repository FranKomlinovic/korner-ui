import {KornerFieldCollection} from "../../ui-components";
import React from "react";
import {Flex} from "@aws-amplify/ui-react";

const Home = () => {

    return (
        <Flex direction={"column"} alignItems={"center"}>
            <KornerFieldCollection/>
        </Flex>
    );


}

export default Home;
