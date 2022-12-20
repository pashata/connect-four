export const prepareFields = (rows, columns) => {
    const fields = {};
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            fields[`${x}${y}`] = null;
        }
    }
    return fields;
}
