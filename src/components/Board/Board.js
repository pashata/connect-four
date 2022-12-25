import React, { useState, useEffect, useRef, useContext } from 'react';
import classNames from "classnames";

import './Board.scss';
import AppContext from "../../App-Context";

export function Board({
    isHidden,
    fields,
    onFieldClick
}) {
    const { numberOfColumns } = useContext(AppContext);
    const [hoveredColumn, setHoveredColumn] = useState(null);
    const boardRef = useRef();

    useEffect(() => {
        boardRef.current.style.setProperty('--number-of-columns', numberOfColumns);
    }, [numberOfColumns])

    return (
        <>
            <div className="board" ref={boardRef}>
                <ul className="board__grid" onMouseLeave={() => setHoveredColumn(null)}>
                    {
                        Object.keys(fields).map(fieldKey => {
                            const column = fieldKey.split('-')[0];
                            const isSelected = !!fields[fieldKey];
                            return (
                                <li className="board__field" key={fieldKey} data-key={fieldKey}>
                                    <span
                                        className={classNames('board__circle',{
                                            'board__circle--hovered': column === hoveredColumn && !isSelected,
                                            [`board__circle--player-${fields[fieldKey]}`]: isSelected,
                                            'board__circle--selected': isSelected,
                                            'board__circle--hidden': isHidden,
                                        })}
                                        onClick={() => onFieldClick(column)}
                                        onMouseOver={() => setHoveredColumn(column)}
                                    >
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
