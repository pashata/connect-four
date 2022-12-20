import React, { useContext } from 'react';
import AppContext from '../../App-Context';
import { ColumnsChoices } from '../../components';

import './Board.scss';

const renderFields = (rows, columns) => {
    const fields = [];
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            fields.push(
                <li className="board__field">
                    <span className="board__circle"></span>
                </li>
            )
        }
    }
    return fields;
}

export function Board() {
    const { numberOfRows, numberOfColumns } = useContext(AppContext);

    return (
        <>
            <div className="board">
                <ColumnsChoices />
                <ul className="board__grid">
                    {renderFields(numberOfRows, numberOfColumns)}
                </ul>
            </div>
        </>
    )
}
