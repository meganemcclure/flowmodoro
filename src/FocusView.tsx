import { useState, useEffect } from 'react'

import './App.css'

interface FocusViewProps {
  toggleFocusTime: (time: number) => void
}

function initTime() {
  let now = Date.now()
  let saved = localStorage.getItem('timerStart')

  console.log(`now: ${now}`)
  console.log(`saved: ${saved}`)

  if (saved) {
    let diff = (now - JSON.parse(saved)) / 1000
    console.log(`difference: ${diff}`)
    return diff
  }
  return 0
}

function FocusView({ toggleFocusTime }: FocusViewProps) {
  const [time, setTime] = useState(initTime()); // time in seconds
  const [isRunning, setIsRunning] = useState(localStorage.getItem('timerStart') !== null);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor((time % 60));

  useEffect(() => {
    let intervalId: number | undefined
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000)
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  function resetTime() {
    setTime(0)
    setIsRunning(false)
    localStorage.removeItem('timerStart')
  }

  function start() {
    setIsRunning(true)
    localStorage.setItem('timerStart', JSON.stringify(Date.now()))
  }
  
  return (
    <div>
      <h1>Focus Time</h1>

      <h1 className="stopwatch-time">
        {hours}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>

      <div>
        <button onClick={start}>Start</button>
        <button onClick={resetTime}>Reset</button>
        <button onClick={() => toggleFocusTime(time)}>Start Break</button>
      </div>
    </div>
  );
}

export default FocusView

