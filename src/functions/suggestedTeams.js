

export function getFirstNTeams(count: number) {
    const suggestedFirstNTeams = [
        {name: "Bijeli", color: "#EDF1FF"},
        {name: "Crni", color: "#000000"},
        {name: "Crveni", color: "#9B2335"},
        {name: "Plavi", color: "#5B5EA6"},
        {name: "Žuti", color: "#EFC050"},
        {name: "Zeleni", color: "#009B77"},
    ]
    return suggestedFirstNTeams.slice(0, count);
}

export function suggestNextTeam(color: string, currentTeams) {
    const suggestedTeams = [
        {name: "Bijeli", color: "#EDF1FF"},
        {name: "Crni", color: "#000000"},
        {name: "Crveni", color: "#9B2335"},
        {name: "Plavi", color: "#5B5EA6"},
        {name: "Žuti", color: "#EFC050"},
        {name: "Zeleni", color: "#009B77"},
    ]

    const colorIndex = suggestedTeams.findIndex(a => a.color === color);
    const test = suggestedTeams.splice(colorIndex);
    const array = [...test, ...suggestedTeams]
    const forbiddenColors = currentTeams.map(a => a.color);
    const available = array.filter(a => !(forbiddenColors.some(b => b === a.color)));

    return available[0];
}
