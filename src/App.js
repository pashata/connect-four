import { useContext, useEffect, useRef } from "react";
import AppContext from './App-Context';

import { Main } from './views';

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
      { isSettingsConfirmed && <Main />}
    </div>
  );
}

export default App;
