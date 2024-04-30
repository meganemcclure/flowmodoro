import { useState, useEffect } from 'react'

import './App.css'

interface BreakViewProps {
  toggleFocusTime: () => void,
  breakTime: number // break time value in ms
}

function BreakView({ toggleFocusTime, breakTime }: BreakViewProps) {
  const [time, setTime] = useState(breakTime);  // time alloted for break, in seconds
  const [isRunning] = useState(true);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor((time % 60));

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning && time >= 1) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // function initBreakTime(breakTime: number) {
  //   let now = Date.now()
  //   let saved = localStorage.getItem('breakTimeStart')
  
  //   if (saved) return (now - JSON.parse(saved)) / 1000
  //   return breakTime
  // }
  
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

