

export function getFirstNTeams(count: number) {
    const suggestedFirstNTeams = [
        {name: "Crni", color: "black"},
        {name: "Bijeli", color: "#EDEADE"},
        {name: "Crveni", color: "red"},
        {name: "Žuti", color: "yellow"},
        {name: "Plavi", color: "blue"},
    ]
    return suggestedFirstNTeams.slice(0, count);
}

export function suggestNextTeam(color: string, currentTeams) {
    const suggestedTeams = [
        {name: "Crni", color: "black"},
        {name: "Bijeli", color: "#EDEADE"},
        {name: "Crveni", color: "red"},
        {name: "Žuti", color: "yellow"},
        {name: "Plavi", color: "blue"},
        {name: "Zeleni", color: "green"},
    ]

    const colorIndex = suggestedTeams.findIndex(a => a.color === color);
    const test = suggestedTeams.splice(colorIndex);
    const array = [...test, ...suggestedTeams]
    const forbiddenColors = currentTeams.map(a => a.color);
    const available = array.filter(a => !(forbiddenColors.some(b => b === a.color)));

    return available[0];
}
