import { useState, useEffect } from 'react'

import './App.css'

interface FocusViewProps {
  toggleFocusTime: (time: number) => void
}

function FocusView({ toggleFocusTime }: FocusViewProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  function toggleStartStop() {setIsRunning(!isRunning)}
  function resetTime() {setTime(0)}
  
  return (
    <div>
      <h1>Focus Time</h1>

      <h1 className="stopwatch-time">
        {hours}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>

      <div>
        <button onClick={toggleStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTime}>Reset</button>
        <button onClick={() => toggleFocusTime(time)}>Start Break</button>
      </div>
    </div>
  );
}

export default FocusView

