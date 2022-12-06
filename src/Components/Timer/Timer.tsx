import React from "react";
import { useTimer } from 'react-timer-hook';


const Timer = (expiryTimestamp: any) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  const {
    seconds,
    minutes,
    start,
    pause,
    restart,
  } = useTimer({ expiryTimestamp: time , autoStart: true });



  return (
    <div className="timer">
      <div className="timer__display" >
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}

export default Timer;