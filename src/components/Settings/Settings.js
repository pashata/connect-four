import React, { useState } from 'react';
import Modal from 'react-modal';
import { SettingsForm } from "./Form/SettingsForm";

import './Settings.scss';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export function Settings({
    isNewGame, isVisible, onSettingsClose, onResetGame
}) {
    const [showSettingsForm, setShowSettingsForm] = useState(false);

    const onNewGameClick = () => {
        onSettingsClose();
        onResetGame();
    }

    return (
        <Modal
            isOpen={isVisible}
            style={customStyles}
            shouldCloseOnOverlayClick={false}
            contentLabel="Settings"
            className="settings flex-center"
            overlayClassName="settings__overlay modal-overlay"
        >
            {!showSettingsForm && (
                <>
                    <h3 className="settings__title">MENU</h3>
                    <div className="settings__actions">
                        <button className="settings__actions__button btn" onClick={()=> setShowSettingsForm(true)}>Settings</button>
                        <button className="settings__actions__button btn" onClick={onNewGameClick}>New Game</button>
                        {
                            !isNewGame && (
                                <button className="settings__actions__button btn" onClick={onSettingsClose}>Resume</button>
                            )
                        }
                    </div>
                </>
            )}
            {showSettingsForm && (
                <SettingsForm
                    onHideSettingsForm={() => setShowSettingsForm(false)}
                    onSaveSettings={onResetGame}
                />
            )}
        </Modal>
    )
}
