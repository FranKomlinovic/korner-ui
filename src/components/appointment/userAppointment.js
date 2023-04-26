import React, {useEffect, useState} from "react";
import {Badge, Card, Flex} from "@aws-amplify/ui-react";
import ReservationForm from "../reservationForm";
import ListUsersForAppointment from "../listUsersForAppointment";
import OwnerAppointment from "./ownerAppointment";
import FigmaAppointment from "../../figma-components/FigmaAppointment";
import {getCurrentDateInDynamoDbString} from "../../functions/converters";

const UserAppointment = ({user, appointment, responses}) => {
    const [responseToUpdate, setResponseToUpdate] = useState();

    useEffect(() => {
        setResponseToUpdate(responses?.find((response) => response.playerID === user?.sub));
    }, [responses, user]);

    const UserView = () => {
        return (
            <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                <Card variation={"elevated"} width={"100%"}>
                    <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
                        <FigmaAppointment appointment={appointment}/>
                        <StatusBadge/>
                    </Flex>
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

    // Badge that shows status of current appointment
    const StatusBadge = () => {
        if (appointment?.canceled) {
            return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"error"}>Termin je
                otkazan</Badge>;
        }
        if (appointment?.confirmed) {
            if (appointment?.date < getCurrentDateInDynamoDbString(0)) {
                return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"info"}>Termin je
                    odigran</Badge>;
            }
            return <Badge size={"large"} textAlign={"center"} alignSelf={"center"} variation={"success"}>Termin je
                rezerviran</Badge>;
        }
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

