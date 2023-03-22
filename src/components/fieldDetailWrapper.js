import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Fields} from "../models";
import {useParams} from "react-router-dom";
import {FieldDetails} from "../ui-components";
import FreeAppointments from "./freeAppointments";


const FieldDetailWrapper = () => {
    const {id} = useParams();
    const [value, setValue] = useState(null)

    useEffect(() => {
        DataStore.query(Fields, id).then((a) => {
                setValue(a);
            }
        );
    }, [id]);


    return (
        <div className={"amplify-card"}>
            {value != null && <FieldDetails data={value}/>}
            <FreeAppointments fieldId={id}/>
        </div>
    );


}


export default FieldDetailWrapper;

