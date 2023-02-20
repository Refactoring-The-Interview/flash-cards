import "./AnswersS.scss";

interface Props {
    answers: string[];
    answer: string;
}

export const Answers = ({ answer, answers }: Props) => {
    return (
        <div>
            {answers.map((currentAnswer) => {
                let isCorrect =
                    currentAnswer === answer ? "correct" : "incorrect";
                return <div className={`${isCorrect}`}>{currentAnswer}</div>;
            })}
        </div>
    );
};
