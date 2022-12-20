import React, { useContext } from 'react';
import AppContext from "../../App-Context";

import './ColumnsChoices.scss';

export function ColumnsChoices() {
    const { numberOfColumns } = useContext(AppContext);

    const renderButtons = () => {
        const tasters = [];
        for (let taster = 0; taster < numberOfColumns; taster++) {
            tasters.push(<button className="column-choices__button" key={`taster-${taster}`}>{taster}</button>)
        }
        return tasters;
    }

    return (
        <div className="column-choices">
            {renderButtons()}
        </div>
    )
}
