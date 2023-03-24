import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useTimer } from "react-timer-hook";
import { Question } from "../../Apis/types";
import "./TimerS.scss";

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
        <div className="Timer">
            <div>
                <h4 className="Time">
                    {minutes}:{seconds}
                </h4>
            </div>

            <Button
                className="Timer-stop"
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
        </div>
    );
};

export default Timer;
