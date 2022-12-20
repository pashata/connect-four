import { useContext, useEffect, useRef } from "react";
import AppContext from './App-Context';

import { Board } from './components';

import './App.css';

function App() {
  const { isSettingsConfirmed, numberOfColumns } = useContext(AppContext);
  const appRef = useRef();

  useEffect(() => {
    appRef.current.style.setProperty('--number-of-columns', numberOfColumns);
  }, [])

  return (
    <div className="connect-four" ref={appRef}>
      { !isSettingsConfirmed && (<>Please choose settings</>) }
      { isSettingsConfirmed && <Board />}
    </div>
  );
}

export default App;
