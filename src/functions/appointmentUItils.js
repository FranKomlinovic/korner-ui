import {Appointment} from "../models";

// unreserved, reserved, canceled, played
export function getAppointmentStatus(appointment: Appointment): string {
    if (!appointment) {
        return undefined
    }
    const isOld = isAppointmentOld(appointment);
    if (appointment?.canceled) {
        return "canceled";
    }
    if (appointment?.confirmed) {
        return isOld ? "played" : "reserved"
    }
    return isOld ? "canceled" : "unreserved"
}

export function getCurrentDate() {
    return new Date().toJSON().slice(0, 10)
}

export function getCurrentTime() {
    return new Date().toLocaleTimeString("sv-SE", {timeStyle: 'short'})
}

export function isAppointmentOld(appointment: Appointment) {
    const currentDate = getCurrentDate();
    if (appointment?.date > currentDate) {
        return false;
    }
    if (appointment?.date < currentDate) {
        return true;
    }
    if (appointment?.start <= getCurrentTime()) {
        return true;
    }
}
