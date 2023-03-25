import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Fields} from "../models";
import {useParams} from "react-router-dom";
import {KornerFieldInfo} from "../ui-components";
import FreeAppointments from "./freeAppointments";
import {convertSportsEnumListToString, convertSurfaceEnumToString} from "./converters";
import {Divider, Flex} from "@aws-amplify/ui-react";


const FieldDetailWrapper = () => {
    const {id} = useParams();
    const [value, setValue] = useState(null)
    const [sports, setSports] = useState(null)
    const [surface, setSurface] = useState(null)

    useEffect(() => {
        DataStore.query(Fields, id).then((a) => {
                setValue(a);
                setSports(convertSportsEnumListToString(a.sports));
                setSurface(convertSurfaceEnumToString(a.surface));
            }
        );
    }, [id]);


    return (
        <Flex direction={"column"} alignItems={"center"}>
            <KornerFieldInfo fields={value} sports={sports} surface={surface}/>
            <Divider/>
            <FreeAppointments fieldId={id}/>
        </Flex>
    );


}


export default FieldDetailWrapper;

