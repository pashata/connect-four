import { useState } from 'react';
import { prepareFields } from "../helpers";
import { USER_KEY } from '../constants'

const preparePlayers = (count) => {
    return Array
        .from({length: count}, (_, i) => i + 1)
        .reduce((players, player) => {
            players[player] = [];
            return players;
        },{})
}

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
            setFields({
                ...fields,
                [key]: `${USER_KEY}${activeUser}`
            });
            setActiveUser(activeUser >= numberOfPlayers ? 1 : activeUser+1);
        }
    }

    return {
        players,
        fields,
        markField
    };
}
