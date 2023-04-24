import React, {useEffect, useState} from "react";
import {Card, Flex} from "@aws-amplify/ui-react";
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
                <Card variation={"elevated"} width={"100%"}>
                    <KornerAppointmentInfoUpdatedWrapper appointment={appointment}/>
                </Card>
                <Card variation={"elevated"} width={"100%"}>
                    <ReservationForm user={user} appointmentId={appointment?.id} responseToUpdate={responseToUpdate}/>
                </Card>
                <Card variation={"elevated"} width={"100%"}>
                    <ListUsersForAppointment user={user} isOwner={false} responses={responses}/>
                </Card>
            </Flex>
        )
    }

    return (
        <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
            {user?.isOwner ? <OwnerAppointment appointment={appointment} responses={responses} user={user}
                                               responseToUpdate={responseToUpdate}/> :
                <UserView/>}
        </Flex>
    );
}


export default UserAppointment;

