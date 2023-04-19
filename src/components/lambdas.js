import {Appointment} from "../models";
import {DataStore} from "aws-amplify";


export function confirmAppointment(appointmentId): Appointment {
    DataStore.query(Appointment, appointmentId).then(appointment => {
        appointment.canceled ?
            window.location.reload()
            :
            // Confirm this appointment
            DataStore.save(Appointment.copyOf(appointment, (item) => {
                item.confirmed = true;
            })).then(() => {
                // Gets all appointments for day and field
                DataStore.query(Appointment, b => b.and(
                    c => [
                        c.id.ne(appointment.id),
                        c.fieldsID.eq(appointment.fieldsID),
                        c.date.eq(appointment.date)
                    ])
                ).then(async (app) => {
                    // Cancel all other appointments
                    for (const a1 of app.filter(a => checkOverlap(appointment, a))) {
                        await DataStore.save(Appointment.copyOf(a1, (item) => {
                            item.canceled = true;
                        }));
                    }
                    window.location.reload();

                });

            });

    });

}

function checkOverlap(app1: Appointment, app2: Appointment) {
    return (app1.start < app2.end && app2.start < app1.end);
}
