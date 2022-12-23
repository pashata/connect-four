import { useState } from 'react';
import { checkWinner, prepareFields, preparePlayers } from "../helpers";

export function useConnectFour({
    numberOfPlayers,
    numberOfRows,
    numberOfColumns
}) {
    const [players] = useState(preparePlayers(numberOfPlayers));
    const [fields, setFields] = useState(prepareFields(numberOfRows, numberOfColumns));
    const [activeUser, setActiveUser] = useState(1);

    const markField = (key) => {
        if (fields[key] !== undefined) {
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
            if (!!winner) {
                alert(winner);
            }
        }
    }

    return {
        players,
        fields,
        markField
    };
}
