import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import './WinnerAnnouncement.scss';

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

export function WinnerAnnouncement({ id, onResetGame }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        onResetGame();
    }

    useEffect(() => {
        setIsOpen(true);
    }, [])

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Winner announcement"
            className="winner-announcement flex-center"
            overlayClassName="winner-announcement__overlay modal-overlay"
        >
            <div className="winner-announcement__wrap">
                <p className="winner-announcement__message">WE HAVE A WINNER : {id}</p>
                <button className="btn" onClick={closeModal}>Reset game</button>
            </div>
        </Modal>
    )
}
