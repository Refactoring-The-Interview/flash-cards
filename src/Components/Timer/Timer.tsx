import React, {useState} from "react";
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
  const [isPause, setIsPause] = useState (false)

  return (
    <div className="timer">
      <div className="timer__display" >
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {
        !isPause && (
          <button
          type="button" className="btn btn-outline-danger"
          onClick={() => {
            pause()
            setIsPause(true)
          }}>Pause</button>
        )
      }
      {
        isPause && (
          <button
          type="button" className="btn btn-outline-success"
            onClick={() => {
              start();
              setIsPause(false)
            }}
          >Start
          </button>
        )
      }
    </div>
  );
}

export default Timer;