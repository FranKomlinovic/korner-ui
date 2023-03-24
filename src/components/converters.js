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
