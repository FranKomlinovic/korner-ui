import {Appointment} from "../models";

const surfaces = new Map(
    [
        ["ARTIFICIAL_GRASS", "Umjetna trava"],
        ["RUBBER", "Guma"],
        ["CONCRETE", "Beton"],
        ["WOOD", "Drvo"]
    ]);

const sports = new Map(
    [
        ["FUTSAL", "Futsal"],
        ["TENNIS", "Tenis"],
        ["BASKETBALL", "Košarka"],
    ]);

const daysOfWeek = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]

export function getDayOfWeek(date: Date) {
    return daysOfWeek[date.getDay()];
}

export function getDateInString(date: Date) {
    return getDayOfWeek(date) + ' ' + date.getDate() + '.' + date.getMonth() + '.';
}

export function getDateTimeFromAppointment(appointment: Appointment) {
    return getDayOfWeek(new Date(appointment.date)) + ' ' + appointment.start + ' - ' + appointment.end;
}

export function calculateDurationFromAppointment(appointment: Appointment) {
    const [startHours, startMinutes] = appointment.start.split(':');
    const [endHours, endMinutes] = appointment.end.split(':');
    const startDate = new Date(1970, 0, 1, startHours, startMinutes);
    const endDate = new Date(1970, 0, 1, endHours, endMinutes);

    const timeDiffInMs = endDate.getTime() - startDate.getTime();
    const timeDiffInMinutes = Math.floor((timeDiffInMs / 1000) / 60);

    const hours = Math.floor(timeDiffInMinutes / 60);
    const minutes = timeDiffInMinutes % 60;

    return `${hours.toString().padStart(1, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function convertSurfaceEnumToString(a): string {
    if (!surfaces.has(a)) {
        return a;
    }
    return surfaces.get(a);
}

export function convertSportsEnumListToString(a: []): string {
    return a.map(convertSportsEnumToString).join(', ');
}

export function convertSportsEnumToString(a): string {
    if (!sports.has(a)) {
        return a;
    }
    return sports.get(a);
}
