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

const FieldById = ({user}) => {
    const {fieldId} = useParams();
    const field = useGetField(fieldId);

    const [date, setDate] = useState(getCurrentDateInDynamoDbString(0));
    const appointments = useGetFieldAppointments(fieldId, date);
    const recurringAppointments = useGetFieldRecurringAppointments(fieldId);

    const [isOwner, setIsOwner] = useState(false)

    // Sets if user is owner of field
    useEffect(() => {
        setIsOwner(checkIfOwner(user, field.data?.ownerID));
    }, [field.data, user]);

    if (field.loading || appointments.loading) {
        return <Placeholder size={"large"}/>
    }

    return (
        <Flex direction={"column"}>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} alignSelf={"center"}>
                <FigmaField field={field.data}/>
                {isOwner && <FieldOwnerFunctions fieldParam={field.data}/>}
            </Flex>

            <FieldFreeAppointmentsView field={field.data} appointments={appointments.data} user={user} date={date}
                                       setDate={setDate}/>
            {isOwner && <FieldOwnerAppointments appointments={appointments.data} recurringAppointments={recurringAppointments.data} date={date}/>}
        </Flex>
    );
}


export default withAuthenticator(FieldById);

