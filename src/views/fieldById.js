import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Fields} from "../models";
import {useParams} from "react-router-dom";
import {checkIfOwner, getCurrentDateInDynamoDbString} from "../functions/converters";
import {Flex, withAuthenticator} from "@aws-amplify/ui-react";
import FigmaField from "../figma-components/FigmaField";
import FieldOwnerFunctions from "../components/field/fieldOwnerFunctions";
import FieldOwnerAppointments from "../components/field/fieldOwnerAppointments";
import FieldFreeAppointmentsView from "../components/field/fieldFreeAppointmentsView";

const FieldById = ({user}) => {
    const {fieldId} = useParams();
    const [field, setField] = useState()
    const [date, setDate] = useState(getCurrentDateInDynamoDbString(0));
    const [fieldAppointments, setFieldAppointments] = useState()
    const [isOwner, setIsOwner] = useState(false)

    // Gets field by id
    useEffect(() => {
        DataStore.query(Fields, fieldId).then(a => {
            setField(a);
        })
    }, [fieldId]);

// Gets all appointments
    useEffect(() => {
        DataStore.observeQuery(Appointment, (c) => c.fieldsID.eq(fieldId)).subscribe(r => {
            setFieldAppointments(r.items)
        })

    }, [fieldId]);


    // Sets if user is owner of field
    useEffect(() => {
        setIsOwner(checkIfOwner(user, field?.ownerID));
    }, [field, user]);

    return (
        <Flex direction={"column"}>
            <Flex direction={"column"} alignSelf={"center"}>
                <FigmaField field={field}/>
                {isOwner && <FieldOwnerFunctions updateFieldFunction={setField} fieldParam={field}/>}
            </Flex>

            <FieldFreeAppointmentsView field={field} appointments={fieldAppointments} user={user} date={date}
                                       setDate={setDate}/>
            {isOwner && <FieldOwnerAppointments appointments={fieldAppointments} date={date}/>}
        </Flex>
    );
}


export default withAuthenticator(FieldById);

