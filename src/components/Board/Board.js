import React, { useContext } from 'react';
import classNames from "classnames";
import AppContext from '../../App-Context';
import { ColumnsChoices } from '../../components';

import './Board.scss';

const renderFields = (fields) => {
    return Object.keys(fields).map(fieldKey => {
        return (
            <li className="board__field" key={fieldKey} data-key={fieldKey}>
                <span
                    className={classNames('board__circle',{
                        [`board__circle--${fields[fieldKey]}`]: !!fields[fieldKey]
                    })}>
                </span>
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
                <ColumnsChoices onFieldClick={onFieldClick}/>
                <ul className="board__grid">
                    {renderFields(fields)}
                </ul>
            </div>
        </>
    )
}
