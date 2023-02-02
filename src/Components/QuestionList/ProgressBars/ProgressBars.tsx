import { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { MyQuestionContext } from "../../QuestionContext/QuestionContext";
import { Question } from "../../../Apis/types";

interface Props {
    title: string;
}

export const ProgressBars = ({ title }: Props) => {
    const { questions } = useContext(MyQuestionContext);

    const correct = questions.filter((question: Question, index: number) => {
        return question.correct !== true;
    }).length;

    const totalQuestions = questions.length;
    const correctPercent = totalQuestions - correct;
    return (
        <>
            {title}
            <ProgressBar
                animated
                variant="success"
                now={correctPercent}
                max={totalQuestions}
                label={`${correctPercent}/${totalQuestions}`}
            />
        </>
    );
};
