import { Question } from "../../Apis/types";
import "./QuestionItemS.scss";

interface Props {
    currentQuestion: Question;
}

export const QuestionItem = ({ currentQuestion }: Props) => {
    const { question, answers } = currentQuestion;
    let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    return (
        <div className="QuestionItem">
            <div className="QuestionItem-Question">{question}</div>
            <div className="QuestionItem-randomAnswer">{randomAnswer}</div>
        </div>
    );
};
