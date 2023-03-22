import { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { Difficulty, Question } from "../../../Apis/types";
import { MyQuestionContext } from "../../Context/QuestionContext";

interface Props {
    difficulty: Difficulty;
    variant: string;
}

export const ProgressBars = ({ difficulty, variant }: Props) => {
    const { questions } = useContext(MyQuestionContext);
    let byDifficulty = questions;

    if (difficulty !== Difficulty.none) {
        byDifficulty = questions.filter((question: Question, index: number) => {
            return question.difficulty === difficulty;
        });
    }
    const correct = byDifficulty.filter((question: Question, index: number) => {
        return question.correct !== true;
    }).length;
    console.log(correct);

    const totalQuestions = byDifficulty.length;
    const correctPercent = totalQuestions - correct;

    return (
        <>
            <ProgressBar
                animated
                variant={variant}
                now={correctPercent}
                max={totalQuestions}
                label={`${correctPercent}/${totalQuestions}`}
            />
        </>
    );
};
