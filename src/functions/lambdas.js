import {Appointment, PossibleAppointments} from "../models";
import {DataStore} from "aws-amplify";
import {getCurrentDate} from "./appointmentUItils";
import {convertDurationEnumToNumber, getDayOfWeekEnum} from "./converters";


export function confirmAppointment(appointmentId): Appointment {
    DataStore.query(Appointment, appointmentId).then(appointment => {
        !appointment.canceled &&
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
                    })).then();
                }
            });

        });

    });

}


export function getAvailableAppointments(fieldAppointments: Appointment[], date: Date, duration: number, field): Appointment[] {
    const appointments = [];

    const [startHours, startMinutes] = field?.workTimeStart ? field?.workTimeStart.split(':') : [16, 0];
    const [endHours, endMinutes] = field?.workTimeEnd ? field?.workTimeEnd.split(':') : [23, 0];
    const start = new Date();

    isToday(date) && start.getHours() > +startHours ?
        start.setHours(new Date().getHours() + 1) :
        start.setHours(startHours)
    start.setMinutes(+startMinutes);
    start.setSeconds(0);
    start.setMilliseconds(0);

    const workTimeEnd = new Date();
    workTimeEnd.setHours(+endHours);
    if (+endHours < +startHours) {
        workTimeEnd.setDate(workTimeEnd.getDate() + 1)
    }
    workTimeEnd.setMinutes(+endMinutes - duration);
    workTimeEnd.setSeconds(0);
    workTimeEnd.setMilliseconds(0);

    while (start <= workTimeEnd) {
        const end = new Date(start);
        end.setMinutes(start.getMinutes() + duration);
        appointments.push(createAppointment(formatToTime(start), formatToTime(end), date))
        start.setMinutes(start.getMinutes() + 30)
    }

    const requestedDateAppointments = fieldAppointments?.filter(a => a.date === date && !a.canceled);
    const confirmedAppointments = requestedDateAppointments?.filter(a => a.confirmed);
    const unconfirmedAppointments = requestedDateAppointments?.filter(a => !a.confirmed);

    return appointments?.filter(a => !isOverlapping(a, confirmedAppointments)).map(a => {
        if (isOverlapping(a, unconfirmedAppointments)) {
            a.overlapping = true
        }
        return a;
    });

}

function isToday(dt): boolean {
    return dt === getCurrentDate();
}

export function getAvailableAppointments2(possibleAppointments: PossibleAppointments[], date: string, duration, fieldAppointments): Appointment[] {
    const appointments = [];
    const dateObject = new Date(date);
    const possibleAppointmentsByDayAndLength = possibleAppointments.filter(a => {
        return a.possibleLengths.includes(duration) &&
            a.days.includes(getDayOfWeekEnum(dateObject))
    }).sort((a, b) => a.start < b.start ? -1 : 1);

    const isTodayDay = isToday(date);

    possibleAppointmentsByDayAndLength.forEach(a => {

        const [startHours, startMinutes] = a?.start && a?.start.split(':');
        let [endHours, endMinutes] = a?.end && a?.end.split(':');

        const workTimeStart = new Date();
        if (isTodayDay) {
            workTimeStart.getHours() > +startHours ?
                workTimeStart.setHours(new Date().getHours() + 1) :
                workTimeStart.setHours(startHours)
            workTimeStart.setMinutes(0)
        } else {
            workTimeStart.setHours(startHours)
            workTimeStart.setMinutes(startMinutes)
        }

        const workTimeEnd = new Date();
        workTimeEnd.setHours(endHours)
        const number = convertDurationEnumToNumber(duration);
        workTimeEnd.setMinutes(+endMinutes - number)
        if (+endHours < +startHours) {
            workTimeEnd.setDate(workTimeEnd.getDate() + 1)
        }
        while (workTimeStart <= workTimeEnd) {
            const end = new Date(workTimeStart);
            end.setMinutes(workTimeStart.getMinutes() + number);
            appointments.push(createAppointment(formatToTime(workTimeStart), formatToTime(end), date, a.priceForHour))
            workTimeStart.setMinutes(workTimeStart.getMinutes() + convertDurationEnumToNumber(a.interval))
        }

    });

    const requestedDateAppointments = fieldAppointments?.filter(a => a.date === date && !a.canceled);
    const confirmedAppointments = requestedDateAppointments?.filter(a => a.confirmed);
    const unconfirmedAppointments = requestedDateAppointments?.filter(a => !a.confirmed);

    return appointments?.filter(a => !isOverlapping(a, confirmedAppointments)).map(a => {
        if (isOverlapping(a, unconfirmedAppointments)) {
            a.overlapping = true
        }
        return a;
    });

}

export function isOverlapping(app: Appointment, fieldAppointments: Appointment[]) {
    return fieldAppointments?.filter(a => checkOverlap(a, app)).length > 0;
}

function formatToTime(date) {
    const formattedHour = date.getHours().toString().padStart(2, '0');
    const formattedMinute = date.getMinutes().toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`
}

function createAppointment(start, end, date, price): Appointment {
    return {start: start, end: end, date: date, price: price}
}

export function checkOverlap(app1: Appointment, app2: Appointment) {
    //TODO Fix logic for hours over midnight
    const end1 = app1.end === "00:00" ? "24:00" : app1.end;
    const end2 = app2.end === "00:00" ? "24:00" : app2.end;
    return (app1.start < end2 && app2.start < end1);
}
