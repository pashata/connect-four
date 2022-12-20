import { useState } from 'react';
import { prepareFields } from "../helpers";

const preparePlayers = (count) => {
    return Array
        .from({length: count}, (_, i) => i + 1)
        .reduce((players, player) => {
            players[`player${player}`] = {
                active: player === 1,
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
    const activeUser = Object.keys(players).find(key => players[key].active);

    const markField = (key) => {
        if (fields[key] !== undefined) {
            setFields({
                ...fields,
                [key]: activeUser
            })
        }
    }

    return {
        players,
        fields,
        markField,
        activeUser
    };
}
