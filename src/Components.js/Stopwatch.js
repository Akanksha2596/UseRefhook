import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    console.log(clearInterval); 
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    console.log(intervalRef);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
        <div className='container'>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <div className='buttons'>
                <button onClick={handleStart}>
                    Start
                </button>
                <button onClick={handleStop}>
                    Stop
                </button>
            </div>
        </div>
    </>
     );
    }