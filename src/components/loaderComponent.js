import {Flex, Heading, Text, View} from "@aws-amplify/ui-react";
import {RotatingLines} from "react-loader-spinner";
import React, {useEffect, useState} from "react";

const LoaderComponent = () => {
    const [randomItem, setRandomItem] = useState(null);

    useEffect(a => {
        const funFacts = ["Kao organizator, možete složiti ekipe", "Možete pogledati sve termine koje ste igrali", "Kao organizator, možete dodati igrače bez slanja linka", "Kao organizator, možete obrisati igrače sa termina"]
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        const selectedRandomItem = funFacts[randomIndex];
        setRandomItem(selectedRandomItem);
    }, [])

    return (
        <View style={{position: "relative", zIndex: 1000}}>
            <Flex
                alignSelf={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
                direction={"column"}>
                <RotatingLines
                    strokeColor="green"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
                {randomItem && <>
                    <Heading>Jeste li znali?</Heading>
                    <Text textAlign={"center"}>{randomItem}</Text>
                </>}

            </Flex>
        </View>)

}
export default LoaderComponent
