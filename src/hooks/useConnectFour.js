import { useState, useEffect } from 'react';
import {
    checkWinner, prepareFields, prepareAvailableFields, generateFieldKey
} from "../helpers";

export function useConnectFour({
    numberOfPlayers,
    numberOfRows,
    numberOfColumns
}) {
    const [fields, setFields] = useState(prepareFields(numberOfRows, numberOfColumns));
    const [activeUser, setActiveUser] = useState(1);
    const [steps, setSteps] = useState([]);
    const [winner, setWinner] = useState(null);
    const [availableFields, setAvailableFields] = useState(prepareAvailableFields(numberOfColumns, numberOfRows));

    const undoMove = () => {
        if (!!steps.length) {
            const newSteps = [...steps];
            const keyToRemove = newSteps.pop();
            const column = keyToRemove.split('-')[0];
            setFields({
                ...fields,
                [keyToRemove]: null,
            })
            setSteps(newSteps);
            setActiveUser(activeUser <= 1 ? numberOfPlayers : activeUser-1);

            const newAvailableRowsInColumn = availableFields[column] < numberOfRows
                ? availableFields[column] + 1
                : numberOfRows;
            setAvailableFields({
                ...availableFields,
                [column]: newAvailableRowsInColumn
            })
        }
    }

    const markField = (column) => {
        if (availableFields[column] > 0) {
            const key = generateFieldKey(column, availableFields[column]);
            if (fields[key] !== undefined && !winner) {
                const newFields = {
                    ...fields,
                    [key]: activeUser
                };
                const winner = checkWinner({
                    player: activeUser,
                    clickedField: key,
                    maxColumn: numberOfColumns,
                    maxRow: numberOfRows,
                    fields: newFields
                });
                setFields(newFields);
                setActiveUser(activeUser >= numberOfPlayers ? 1 : activeUser+1);
                setSteps([...steps, key]);
                setAvailableFields({
                    ...availableFields,
                    [column]: availableFields[column] - 1
                })
                setWinner(winner);
            }
        }
    }

    const resetGame = () => {
        setWinner(null);
        setSteps([]);
        setActiveUser(1);
        setFields(prepareFields(numberOfRows, numberOfColumns));
        setAvailableFields(prepareAvailableFields(numberOfColumns, numberOfRows));
    }

    useEffect(resetGame, [numberOfColumns, numberOfRows, numberOfPlayers])

    return {
        fields,
        winner,
        isNewGame: steps.length <= 0,
        markField,
        undoMove,
        resetGame
    };
}
