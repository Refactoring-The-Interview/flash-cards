import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import "./TimerS.scss";
import { Button } from "react-bootstrap";

const Timer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);

    const { seconds, minutes, start, pause } = useTimer({
        expiryTimestamp: time,
        autoStart: true,
    });

    const [isPause, setIsPause] = useState<boolean>(false);
    const buttonTextPause = isPause ? "Start" : "Pause";
    const buttonVariantPause = isPause ? "outline-success" : "outline-danger";

    return (
        <>
            <div>
                <span>
                    {minutes}:{seconds}
                </span>
            </div>

            <Button
                variant={buttonVariantPause}
                onClick={() => {
                    if (isPause) {
                        start();
                    } else {
                        pause();
                    }
                    setIsPause(!isPause);
                }}
            >
                {buttonTextPause}
            </Button>
        </>
    );
};

export default Timer;
