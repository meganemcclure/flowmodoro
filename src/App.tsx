import { useState, useEffect } from 'react'

import './App.css'
import FocusView from './FocusView';
import BreakView from './BreakView';

function App() {
  const [isFocusTime, setIsFocusTime] = useState(initIsFocusTime());
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    localStorage.setItem('isFocusTime', JSON.stringify(isFocusTime))
  }, [isFocusTime])

  function toggleFocusTime(time?: number) {
    setIsFocusTime(!isFocusTime)
    if (time) setBreakTime(time / 5)
  }

  function initIsFocusTime() {
    let saved = localStorage.getItem('isFocusTime')

    if (saved) return JSON.parse(saved)
    return true
  }
  
  return (
    <>
      {isFocusTime ? <FocusView toggleFocusTime={toggleFocusTime}/> : <BreakView toggleFocusTime={toggleFocusTime} breakTime={breakTime}/>}
    </>
  );
}

export default App

