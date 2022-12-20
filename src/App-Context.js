import React, { useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = (props) => {
    const { children } = props;
    const [numberOfPlayers, setNumberOfPlayers] = useState(2);
    const [numberOfRows, setNumberOfRows] = useState(6);
    const [numberOfColumns, setNumberOfColumns] = useState(7);
    const [isSettingsConfirmed, setIsSettingsConfirmed] = useState(true);

    return (
        <AppContext.Provider value={{
            numberOfPlayers,
            setNumberOfPlayers,
            numberOfRows,
            setNumberOfRows,
            numberOfColumns,
            setNumberOfColumns,
            isSettingsConfirmed,
            setIsSettingsConfirmed
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext
