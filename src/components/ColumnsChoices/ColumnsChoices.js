import React, { useContext } from 'react';
import AppContext from "../../App-Context";

import './ColumnsChoices.scss';

export function ColumnsChoices({
    onFieldClick
}) {
    const { numberOfColumns } = useContext(AppContext);

    const renderButtons = () => {
        const tasters = [];
        for (let taster = 0; taster < numberOfColumns; taster++) {
            const columnNumber = taster+1;
            tasters.push(
                <button
                    className="column-choices__button"
                    key={`taster-${columnNumber}`}
                    onClick={() => onFieldClick(columnNumber)}
                >
                    {columnNumber}
                </button>
            )
        }
        return tasters;
    }

    return (
        <div className="column-choices">
            {renderButtons()}
        </div>
    )
}
