import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {checkIfOwner, getCurrentDateInDynamoDbString} from "../functions/converters";
import {Flex, Placeholder, withAuthenticator} from "@aws-amplify/ui-react";
import FigmaField from "../figma-components/FigmaField";
import FieldOwnerFunctions from "../components/field/fieldOwnerFunctions";
import FieldOwnerAppointments from "../components/field/fieldOwnerAppointments";
import FieldFreeAppointmentsView from "../components/field/fieldFreeAppointmentsView";
import useGetField from "../custom-hooks/field/useGetField";
import useGetFieldAppointments from "../custom-hooks/field/useGetFieldAppointments";
import useGetFieldRecurringAppointments from "../custom-hooks/field/useGetFieldRecurringAppointments";
import {DataStore} from "aws-amplify/datastore";
import {PossibleAppointments} from "../models";
import useGetCurrentUser from "../custom-hooks/useGetCurrentUser";

const FieldById = () => {
    const {fieldId} = useParams();
    const field = useGetField(fieldId);

    const [date, setDate] = useState(getCurrentDateInDynamoDbString(0));
    const [possibleAppointments, setPossibleAppointments] = useState();
    const appointments = useGetFieldAppointments(fieldId, date);
    const recurringAppointments = useGetFieldRecurringAppointments(fieldId);
    const {user} = useGetCurrentUser();
    const [isOwner, setIsOwner] = useState(false)

    // Sets if user is owner of field
    useEffect(() => {
        setIsOwner(checkIfOwner(user, field.data?.ownerID));
    }, [field.data, user]);

    useEffect(() => {
        fieldId && DataStore.query(PossibleAppointments, (c) => c.fieldsID.eq(fieldId)).then(a => {
            setPossibleAppointments(a);
        })
    }, [fieldId]);

    if (field.loading || appointments.loading) {
        return <Placeholder size={"large"}/>
    }

    return (
        <Flex direction={"column"}>
            <FigmaField field={field.data}/>
            <FieldFreeAppointmentsView field={field.data} appointments={appointments.data} user={user} date={date}
                                       setDate={setDate} possibleAppointments={possibleAppointments}/>
            {isOwner && <FieldOwnerAppointments appointments={appointments.data}
                                                recurringAppointments={recurringAppointments.data} date={date}/>}
            {isOwner && <FieldOwnerFunctions fieldParam={field.data}/>}
        </Flex>
    );
}


export default withAuthenticator(FieldById);

