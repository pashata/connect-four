import { useState, useEffect, useRef } from 'react';
import { checkWinner, generateFieldKey, saveState } from "../helpers";
import { prepareData, getAvailableRowInAColumn } from './helpers';
import { LOCAL_STORAGE_KEY } from './contants';

export function useConnectFour({
    numberOfPlayers,
    numberOfRows,
    numberOfColumns
}) {
    const [fields, setFields] = useState({});
    const [activeUser, setActiveUser] = useState(1);
    const [steps, setSteps] = useState([]);
    const [winner, setWinner] = useState(null);
    const initLoad = useRef(true);

    const setData = (shouldResetData = false, data) => {
        const dataToSet = data ?? prepareData(numberOfRows, numberOfColumns, shouldResetData);
        saveState(LOCAL_STORAGE_KEY, dataToSet);

        const {
            winner: winnerToSet = null,
            steps: stepsToSet,
            activeUser: activeUserToSet,
            fields: fieldsToSet
        } = dataToSet;

        setWinner(winnerToSet);
        setSteps(stepsToSet);
        setActiveUser(activeUserToSet);
        setFields(fieldsToSet);
    }

    const undoMove = () => {
        if (!!steps.length) {
            const newSteps = [...steps];
            const keyToRemove = newSteps.pop();
            const newFields = {
                ...fields,
                [keyToRemove]: null,
            };
            const newActiveUser = activeUser <= 1 ? numberOfPlayers : activeUser-1;

            setData(false, {
                fields: newFields,
                steps: newSteps,
                activeUser: newActiveUser
            })
        }
    }

    const markField = (column) => {
        const availableRow = getAvailableRowInAColumn(fields, column);
        if (availableRow > 0) {
            const key = generateFieldKey(column, availableRow);

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
                const newActiveUser = activeUser >= numberOfPlayers ? 1 : activeUser+1;
                const newSteps = [...steps, key];

                setData(false, {
                    fields: newFields,
                    activeUser: newActiveUser,
                    steps: newSteps,
                    winner
                })
            }
        }
    }

    const resetGame = () => setData(true);

    useEffect(() => {
        if (initLoad.current) {
            setData(false);
            initLoad.current = false;
        } else {
            setData(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberOfColumns, numberOfRows, numberOfPlayers])

    return {
        fields,
        winner,
        isNewGame: steps.length <= 0,
        markField,
        undoMove,
        resetGame
    };
}
