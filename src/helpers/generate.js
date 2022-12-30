export const generateFieldKey = (column, row) => `${column}-${row}`;
export const getColumnFromFieldKey = (key) => key.split('-')[0];
export const getRowFromFieldKey = (key) => key.split('-')[1];
export const getColumnAndRowFromFieldKey = (key) => {
    const [column, row] = key.split('-');
    return { column, row }
}

export const prepareAvailableFields = (columns, rows) => {
    return Array
        .from({length: columns}, (_, i) => i + 1)
        .reduce((acc, column) => {
            acc[column] = rows;
            return acc;
        },{})
}
