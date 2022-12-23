import { generateFieldKey } from './generate';

export const prepareFields = (rows, columns) => {
    const fields = {};
    for (let x = 1; x < rows + 1; x++) {
        for (let y = 1; y < columns + 1; y++) {
            fields[generateFieldKey(y,x)] = null;
        }
    }
    return fields;
}
