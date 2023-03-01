import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import "./TimerS.scss";
import { Button } from "react-bootstrap";
import { Question } from "../../Apis/types";

interface TimerProps {
    expiryTimeStamp?: number;
    currentQuestion: Question;
}

const Timer = (expiryTimestamp: TimerProps, currentQuestion: TimerProps) => {
    const time = new Date();
    const timerStamp = +expiryTimestamp < 0 ? +expiryTimestamp : 300;
    time.setSeconds(time.getSeconds() + timerStamp);
    const { seconds, minutes, start, pause, restart } = useTimer({
        expiryTimestamp: time,
        autoStart: true,
    });

    useEffect(() => {
        restart(time, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestion]);

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
