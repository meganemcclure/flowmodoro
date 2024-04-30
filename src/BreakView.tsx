import { useState, useEffect } from 'react'

import './App.css'

interface BreaViewProps {
  toggleFocusTime: () => void,
  breakTime: number // break time value in ms
}

function BreakView({ toggleFocusTime, breakTime }: BreaViewProps) {
  const [time, setTime] = useState(breakTime);
  const [isRunning] = useState(true);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning && time >= 10) {
      intervalId = setInterval(() => setTime(time - 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
  
  return (
    <div>
      <h1>Break</h1>

      <h1 className="stopwatch-time">
        {hours}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>

      <div>
        <button disabled={false} onClick={toggleFocusTime}>Resume Focus Time</button>
      </div>
    </div>
  );
}

export default BreakView

