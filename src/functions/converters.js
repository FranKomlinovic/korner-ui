const surfaces = new Map(
    [
        ["ARTIFICIAL_GRASS", "Umjetna trava"],
        ["RUBBER", "Guma"],
        ["CONCRETE", "Beton"],
        ["WOOD", "Parket"]
    ]);

const sports = new Map(
    [
        ["FUTSAL", "Futsal"],
        ["PING_PONG", "Ping-Pong"],
        ["BADMINTON", "Badminton"],
        ["TENNIS", "Tenis"],
        ["BASKETBALL", "Košarka"],
        ["PADEL", "Padel"],
        ["CAGEBALL", "Cageball"],
    ]);
const duration = new Map(
    [
        ["HOUR", 60],
        ["HOUR_AND_HALF", 90],
        ["TWO_HOURS", 120],
        ["HALF_HOUR", 30]
    ]);
const daysOfWeek = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
const daysOfWeekEnum = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

export function getDayOfWeek(date: Date) {
    return daysOfWeek[date.getDay()];
}

export function getDayOfWeekEnum(date: Date) {
    return daysOfWeekEnum[date.getDay()];
}

export function getDateInDdMmYyyy(date) {
    const dt = new Date(date);
    return dt.toLocaleDateString("de-AT")
}

export function getTimeFromTimestamp(timestamp) {
    let date = new Date(timestamp);
    return getTimeFromDate(date);
}

export function getTimeFromDate(date: Date) {
    let time = date.toTimeString().split(":");
    return time[0] + ":" + time[1];
}

export function getDateInStringFromOffset(plusDays: number) {
    let date = new Date(Date.now() + plusDays * 24 * 60 * 60 * 1000);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return getDayOfWeek(date) + ' ' + date.getDate() + '.' + month + '.' + year;
}

export function getDateInString(date: Date) {
    let month = date.getMonth() + 1;
    return getDayOfWeek(date) + ' ' + date.getDate() + '.' + month + '.';
}

export function checkIfOwner(user, fieldOwnerId): boolean {
    return user && fieldOwnerId === user.cognitoID;
}

export function getCurrentDateInDynamoDbString(plusDays: number) {
    let newDate = new Date(Date.now() + plusDays * 24 * 60 * 60 * 1000);
    return newDate.toISOString().split('T')[0]
}

export function getDateTimeFromAppointment(appointment) {
    return getDayOfWeek(new Date(appointment?.date)) + ' ' + appointment?.start + ' - ' + appointment?.end;
}


export function getDayAndDateFromAppointment(date) {
    let parsedDate = new Date(date);
    return getDateInString(parsedDate) + parsedDate.getFullYear() + ".";
}

export function convertSurfaceEnumToString(a): string {
    return surfaces.has(a) ? surfaces.get(a) : a;
}

export function convertSportsEnumListToString(a: []): string {
    return a ? a.map(convertSportsEnumToString).join(', ') : "";
}

export function convertSportsEnumToString(a): string {
    return sports.has(a) ? sports.get(a) : a;
}

export function convertDurationEnumToNumber(a): number {
    return duration.has(a) ? duration.get(a) : a;
}
