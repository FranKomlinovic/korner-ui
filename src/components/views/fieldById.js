import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Fields} from "../../models";
import {useParams} from "react-router-dom";
import {KornerFieldInfo} from "../../ui-components";
import FreeAppointmentsView from "../components/freeAppointmentsView";
import {convertSportsEnumListToString, convertSurfaceEnumToString} from "../converters";
import {Divider, Flex} from "@aws-amplify/ui-react";


const FieldById = () => {
    const {fieldId} = useParams();
    const [field, setField] = useState(null)
    const [sports, setSports] = useState(null)
    const [surface, setSurface] = useState(null)

    useEffect(() => {
        DataStore.query(Fields, fieldId).then((a) => {
                setField(a);
                setSports(convertSportsEnumListToString(a.sports));
                setSurface(convertSurfaceEnumToString(a.surface));
            }
        );
    }, [fieldId]);


    return (
        <Flex direction={"column"} alignItems={"center"}>
            <KornerFieldInfo fields={field} sports={sports} surface={surface}/>
            <Divider/>
            { fieldId != null && <FreeAppointmentsView field={field}/>}
        </Flex>
    );


}


export default FieldById;

