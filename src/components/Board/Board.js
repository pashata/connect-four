import React, { useContext } from 'react';
import AppContext from '../../App-Context';
import { ColumnsChoices } from '../../components';

import './Board.scss';

export const renderFields = (fields, clickHandler) => {
    return Object.keys(fields).map(field => {
        return (
            <li className="board__field" key={field}>
                <span className="board__circle" onClick={() => clickHandler(field)}></span>
            </li>
        )
    })
}

export function Board({
    fields,
    onFieldClick
}) {
    const { numberOfRows, numberOfColumns } = useContext(AppContext);

    return (
        <>
            <div className="board">
                <ColumnsChoices />
                <ul className="board__grid">
                    {renderFields(fields, onFieldClick)}
                </ul>
            </div>
        </>
    )
}
