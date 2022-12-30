export const generateFieldKey = (column, row) => `${column}-${row}`;

export const prepareAvailableFields = (columns, rows) => {
    return Array
        .from({length: columns}, (_, i) => i + 1)
        .reduce((acc, column) => {
            acc[column] = rows;
            return acc;
        },{})
}
