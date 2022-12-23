import React, { useContext, useState } from 'react';
import AppContext from "../../App-Context";
import { generateFieldKey } from '../../helpers';

import './ColumnsChoices.scss';

const prepareAvailableRows = (columns, rows) => {
    return Array
        .from({length: columns}, (_, i) => i + 1)
        .reduce((acc, column) => {
            acc[column] = rows;
            return acc;
        },{})
}

export function ColumnsChoices({
    onFieldClick
}) {
    const { numberOfColumns, numberOfRows } = useContext(AppContext);
    const [availableRows, setAvailableRows] = useState(prepareAvailableRows(numberOfColumns, numberOfRows));

    const tasterClickHandler = (column) => {
        if (availableRows[column] > 0) {
            onFieldClick(generateFieldKey(column, availableRows[column]));
            setAvailableRows({
                ...availableRows,
                [column]: availableRows[column] - 1
            })
        }
    }

    const renderButtons = () => {
        const tasters = [];
        for (let taster = 0; taster < numberOfColumns; taster++) {
            const columnNumber = taster+1;
            tasters.push(
                <button
                    className="column-choices__button"
                    key={`taster-${columnNumber}`}
                    onClick={() => tasterClickHandler(columnNumber)}
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
