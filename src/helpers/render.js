export const prepareFields = (rows, columns) => {
    const fields = {};
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            fields[`${x+1}${y+1}`] = null;
        }
    }
    return fields;
}
