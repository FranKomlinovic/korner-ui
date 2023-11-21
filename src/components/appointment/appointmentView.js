// Sets appointment view
import React, {useEffect, useMemo, useState} from "react";
import UnreservedAppointment from "../../views/apppointment/unreservedAppointment";
import ReservedAppointment from "../../views/apppointment/reservedAppointment";
import CanceledAppointment from "../../views/apppointment/canceledAppointment";
import PlayedAppointment from "../../views/apppointment/playedAppointment";

const AppointmentView = ({appointment, responses, field, user, appointmentStatus, teams}) => {
    const [userModel, setUserModel] = useState();

    const role = useMemo(() => {
        const cognitoID = user?.cognitoID;

        if (!user) {
            return "GUEST_USER"
        }

        if (field?.ownerID === cognitoID) {
            return "FIELD_OWNER"
        }

        if (appointment?.bookerID === cognitoID) {
            return "APPOINTMENT_OWNER"
        }

        return "REGISTERED_USER"
    }, [user, field?.ownerID, appointment?.bookerID])


    useEffect(() => {
       setUserModel({
                name: user?.name,
                cognitoID: user?.cognitoID,
                picture: user?.picture,
                isOwner: appointment?.bookerID === user?.cognitoID,
                role: role
        })

    }, [appointment, user, role]);

    return useMemo(() => {
            switch (appointmentStatus) {
                case "unreserved" :
                    return <UnreservedAppointment appointment={appointment} user={userModel}
                                                  responses={responses}
                                                  role={userModel?.role} field={field}/>
                case "reserved" :
                    return <ReservedAppointment role={userModel?.role} responses={responses}
                                                appointment={appointment}
                                                field={field} user={userModel} teams={teams}/>
                case "canceled" :
                    return <CanceledAppointment responses={responses}/>

                case "played" :
                    return <PlayedAppointment appointment={appointment} teams={teams}
                                              role={userModel?.role}
                                              responses={responses}/>

                default:
                    return <></>
            }
        }
        , [appointment, appointmentStatus, field, responses, teams, userModel]);

}

export default AppointmentView
