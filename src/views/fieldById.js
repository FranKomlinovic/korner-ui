import React, {useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Appointment, Fields} from "../models";
import {useParams} from "react-router-dom";
import FreeAppointmentsView from "../components/freeAppointmentsView";
import {checkIfOwner} from "../functions/converters";
import {Card, Flex, withAuthenticator} from "@aws-amplify/ui-react";
import FigmaField from "../figma-components/FigmaField";
import FieldOwnerFunctions from "../components/field/fieldOwnerFunctions";
import FieldOwnerAppointments from "../components/field/fieldOwnerAppointments";
import FieldFreeAppointmentsView from "../components/field/fieldFreeAppointmentsView";

const FieldById = ({user}) => {
    const {fieldId} = useParams();
    const [field, setField] = useState()
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
        <Flex direction={"column"} alignItems={"center"}>
            <FigmaField field={field}/>
            {isOwner && <FieldOwnerFunctions updateFieldFunction={setField} fieldParam={field}/>}
            {isOwner && <FieldOwnerAppointments appointments={fieldAppointments}/>}
            <FieldFreeAppointmentsView field={field} appointments={fieldAppointments} user={user}/>
        </Flex>
    );
}


export default withAuthenticator(FieldById);

