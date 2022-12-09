import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import "./TimerS.scss";
import iconSprite from "../../Assets/icons/sprite.svg";

const Timer = (expiryTimestamp: any) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);

    const { seconds, minutes, start, pause, restart } = useTimer({
        expiryTimestamp: time,
        autoStart: true,
    });

    const [isPause, setIsPause] = useState(false);

    return (
        <div className="timer">
            <svg className="timer__icon-stopwatch">
                {/* <use xlinkHref={`${iconSprite}#icon-stopwatch`}> </use> */}
            </svg>
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
