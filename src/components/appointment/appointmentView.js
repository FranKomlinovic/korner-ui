// Sets appointment view
import React, {useMemo} from "react";
import UnreservedAppointment from "../../views/apppointment/unreservedAppointment";
import ReservedAppointment from "../../views/apppointment/reservedAppointment";
import CanceledAppointment from "../../views/apppointment/canceledAppointment";
import PlayedAppointment from "../../views/apppointment/playedAppointment";

const AppointmentView = ({appointment, responses, field, user, appointmentStatus, teams}) => {

    const role = useMemo(() => {
        const sub = user?.attributes?.sub;

        if (!user) {
            return "GUEST_USER"
        }

        if (field?.ownerID === sub) {
            return "FIELD_OWNER"
        }

        if (appointment?.bookerID === sub) {
            return "APPOINTMENT_OWNER"
        }

        return "REGISTERED_USER"
    }, [user, field?.ownerID, appointment?.bookerID])


    const userModel = useMemo(() => {
        const attributes = user?.attributes;
        return {
            name: attributes?.given_name + " " + attributes?.family_name,
            sub: attributes?.sub,
            photo: attributes?.picture,
            isOwner: appointment?.bookerID === attributes?.sub,
            role: role
        };
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
