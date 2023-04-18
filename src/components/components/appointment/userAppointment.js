import React, {useEffect, useState} from "react";
import {Divider, Flex} from "@aws-amplify/ui-react";
import KornerAppointmentInfoUpdatedWrapper from "../../wrappers/kornerAppointmentInfoUpdatedWrapper";
import ReservationForm from "../reservationForm";
import ListUsersForAppointment from "../listUsersForAppointment";
import OwnerAppointment from "./ownerAppointment";

const UserAppointment = ({user, appointment, responses}) => {
    const [responseToUpdate, setResponseToUpdate] = useState();

    useEffect(() => {
        setResponseToUpdate(responses?.find((response) => response.playerID === user?.sub));
    }, [responses, user]);

    const UserView = () => {
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <KornerAppointmentInfoUpdatedWrapper user={user} appointment={appointment} responses={responses}/>
                <Divider size={"small"}/>
                <ReservationForm user={user} appointmentId={appointment?.id} responseToUpdate={responseToUpdate}/>
                <Divider size={"small"}/>
                <ListUsersForAppointment user={user} isOwner={false} responses={responses}/>
                <Divider size={"small"}/>
            </Flex>
        )
    }

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {user?.isOwner && <OwnerAppointment appointment={appointment} responses={responses} user={user} responseToUpdate={responseToUpdate}/>}
            {!user?.isOwner && <UserView/>}
        </Flex>
    );
}


export default UserAppointment;

