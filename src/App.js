import React, {useContext, useEffect, useState} from "react";
import {
    Board, Navigation, Settings, WinnerAnnouncement, Footer
} from './components';
import { useConnectFour } from "./hooks/useConnectFour";
import AppContext from './App-Context';

import './App.scss';

function App() {
  const [isSettingsConfirmed, setIsSettingsConfirmed] = useState(false);
    const context = useContext(AppContext);
    const {
        winner, fields, isNewGame,
        markField, undoMove, resetGame
    } = useConnectFour(context);

    useEffect(() => {
        console.log('Fucking bitch');
    }, [])

  return (
    <div className="connect-four">
        <Settings
            isVisible={!isSettingsConfirmed}
            isNewGame={isNewGame}
            onSettingsClose={() => setIsSettingsConfirmed(true)}
            onResetGame={resetGame}
        />
        <Navigation
            className="connect-four__navigation"
            showUndoButton={!isNewGame}
            onUndoMove={undoMove}
            onOpenSettings={() => setIsSettingsConfirmed(false)}
        />
        <Board
            isHidden={!isSettingsConfirmed}
            fields={fields}
            onFieldClick={markField}
        />
        { !!winner && (<WinnerAnnouncement id={winner} onResetGame={resetGame}/>) }
        <Footer className="connect-four__footer"/>
    </div>
  );
}

export default App;
