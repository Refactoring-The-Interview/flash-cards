import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import "./TimerS.scss";

interface TimerProps {
    expiryTimeStamp?: number;
}

const Timer = (expiryTimestamp: TimerProps) => {
    const time = new Date();
    const timerStamp = +expiryTimestamp < 0 ? +expiryTimestamp : 300;
    time.setSeconds(time.getSeconds() + timerStamp);

    const { seconds, minutes, start, pause } = useTimer({
        expiryTimestamp: time,
        autoStart: true,
    });

    const [isPause, setIsPause] = useState(false);

    return (
        <div className="timer">
            <div className="timer__display">
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            {!isPause && (
                <button
                    type="button"
                    className="btn timer__btn btn-outline-danger"
                    onClick={() => {
                        pause();
                        setIsPause(true);
                    }}
                >
                    Pause
                </button>
            )}
            {isPause && (
                <button
                    type="button"
                    className="btn timer__btn btn-outline-success"
                    onClick={() => {
                        start();
                        setIsPause(false);
                    }}
                >
                    Start
                </button>
            )}
        </div>
    );
};

export default Timer;
