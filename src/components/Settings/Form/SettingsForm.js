import React, { useState, useContext } from 'react';
import AppContext from "../../../App-Context";

import './SettingsForm.scss';

export function SettingsForm({ onHideSettingsForm }) {
    const {
        numberOfColumns, numberOfRows, numberOfPlayers,
        setNumberOfColumns, setNumberOfRows, setNumberOfPlayers
    } = useContext(AppContext);

    const [columnsInput, setColumnsInput] = useState(numberOfColumns);
    const [rowsInput, setRowsInput] = useState(numberOfRows);
    const [playersInput, setPlayersInput] = useState(numberOfPlayers);

    const saveSettings = () => {
        setNumberOfColumns(parseInt(columnsInput));
        setNumberOfRows(parseInt(rowsInput));
        setNumberOfPlayers(parseInt(playersInput));
        onHideSettingsForm();
    }

    return (
        <div className="settings-form">
            <div className="settings-form__form">
                <label for="number-of-columns-input" className="settings-form__label">Number of columns</label>
                <input
                    id="number-of-columns-input"
                    className="settings-form__input input"
                    type="number"
                    value={columnsInput}
                    onChange={(e) => setColumnsInput(e.target.value)}
                />
                <label for="number-of-rows-input" className="settings-form__label">Number of rows</label>
                <input
                    id="number-of-rows-input"
                    className="settings-form__input input"
                    type="number"
                    value={rowsInput}
                    onChange={(e) => setRowsInput(e.target.value)}
                />
                <label for="number-of-players-input" className="settings-form__label">Number of players</label>
                <input
                    id="number-of-players-input"
                    className="settings-form__input input"
                    type="number"
                    value={playersInput}
                    min={2}
                    max={4}
                    onChange={(e) => setPlayersInput(e.target.value)}
                />
            </div>
            <div className="settings-form__actions">
                <button className="settings-form__actions__button btn" onClick={saveSettings}>Save settings</button>
                <button className="settings-form__actions__button btn" onClick={onHideSettingsForm}>Cancel</button>
            </div>
        </div>
    )
}
