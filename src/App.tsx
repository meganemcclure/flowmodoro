import { useState } from 'react'

import './App.css'
import FocusView from './FocusView';
import BreakView from './BreakView';

function App() {
  const [isFocusTime, setIsFocusTime] = useState(true);
  const [breakTime, setBreakTime] = useState(0);

  function toggleFocusTime(time?: number) {
    setIsFocusTime(!isFocusTime)
    if (time) setBreakTime(time / 5)
  }
  
  return (
    <>
      {isFocusTime ? <FocusView toggleFocusTime={toggleFocusTime}/> : <BreakView toggleFocusTime={toggleFocusTime} breakTime={breakTime}/>}
    </>
  );
}

export default App

