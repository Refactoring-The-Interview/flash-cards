import { Question } from "../../Apis/types";
import { AnswersList } from "./AnswersList";
import "./QuestionItemS.scss";

interface Props {
    currentQuestion: Question;
}

export const QuestionItem = ({ currentQuestion }: Props) => {
    const { answer, question, answers } = currentQuestion;

    return (
        <div className="QuestionItem">
            <div>Question: {question}</div>
            <div>
                <AnswersList answer={answer} answers={answers} />
            </div>
        </div>
    );
};
