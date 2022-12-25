import React, { useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = (props) => {
    const { children } = props;
    const [numberOfPlayers, setNumberOfPlayers] = useState(2);
    const [numberOfRows, setNumberOfRows] = useState(6);
    const [numberOfColumns, setNumberOfColumns] = useState(7);

    return (
        <AppContext.Provider value={{
            numberOfPlayers,
            setNumberOfPlayers,
            numberOfRows,
            setNumberOfRows,
            numberOfColumns,
            setNumberOfColumns
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext
