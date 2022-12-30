import { loadState, prepareAvailableFields, prepareFields } from "../helpers";
import { LOCAL_STORAGE_KEY } from './contants';

/**
 * Prepare the core data for the game
 *
 * @param rows
 * @param columns
 * @param reset
 * @returns {null|object}
 */
export const prepareData = (rows, columns, reset = false) => {
    let data = null;

    if (!reset) {
        data = loadState(LOCAL_STORAGE_KEY);
    }

    if (!data) {
        data = {
            fields: prepareFields(rows, columns),
            activeUser: 1,
            steps: [],
            availableFields: prepareAvailableFields(columns, rows),
            winner: null
        }
    }

    return data;
}

/**
 *  Get the number of available rows per column
 *
 * @param fields
 * @param column
 * @returns {number}
 */
export const getAvailableRowInAColumn = (fields, column) => {
    if (!fields) {
        return 0;
    }

    const fieldsToCheck = Object.keys(fields).filter(key => key.startsWith(column));
    return fieldsToCheck.filter(fieldToCheck => fields[fieldToCheck] === null).length;
}
