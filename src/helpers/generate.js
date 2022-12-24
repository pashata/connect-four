export const generateFieldKey = (column, row) => `${column}-${row}`;

export const preparePlayers = (count) => {
    return Array
        .from({length: count}, (_, i) => i + 1)
        .reduce((players, player) => {
            players[player] = [];
            return players;
        },{})
}

export const prepareAvailableFields = (columns, rows) => {
    return Array
        .from({length: columns}, (_, i) => i + 1)
        .reduce((acc, column) => {
            acc[column] = rows;
            return acc;
        },{})
}
