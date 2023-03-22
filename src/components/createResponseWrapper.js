import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CreateResponse} from "../ui-components";


const CreateResponseWrapper = () => {
    const {appointmentId} = useParams();
    const [value, setValue] = useState(null)

    useEffect(() => {

    }, [appointmentId]);


    return (
        <div>
            <CreateResponse/>
        </div>
    );


}


export default CreateResponseWrapper;

