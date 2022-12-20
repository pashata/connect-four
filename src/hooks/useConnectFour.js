import { useState } from 'react';
import { prepareFields } from "../helpers";

const preparePlayers = (count) => {
    return Array
        .from({length: count}, (_, i) => i + 1)
        .reduce((players, player) => {
            players[`player${player}`] = {
                active: false,
                fields: []
            };
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

    const markField = (key, user) => {
        if (fields[key] !== undefined) {
            setFields({
                ...fields,
                [key]: user
            })
        }
    }

    return {
        players,
        fields,
        markField,
    };
}
