import React, { useContext } from 'react';
import { Board } from '../../components';
import { useConnectFour } from '../../hooks/useConnectFour'
import AppContext from "../../App-Context";

export function Main() {
    const context = useContext(AppContext);
    const { fields, markField } = useConnectFour(context);

    return (
        <div className="main">
            <Board
                fields={fields}
                onFieldClick={markField}
            />
        </div>
    )
}
