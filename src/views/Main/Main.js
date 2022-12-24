import React, { useContext } from 'react';
import { Board } from '../../components';
import { useConnectFour } from '../../hooks/useConnectFour'
import AppContext from "../../App-Context";

export function Main() {
    const context = useContext(AppContext);
    const { fields, markField, undoMove } = useConnectFour(context);

    return (
        <div className="main">
            <button onClick={undoMove}>Undo</button>
            <Board
                fields={fields}
                onFieldClick={markField}
            />
        </div>
    )
}
