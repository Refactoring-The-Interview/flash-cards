import { Question } from "../../Apis/types";
import { Answers } from "./Answers";
import "./QuestionItemS.scss";

interface Props {
    currentQuestion: Question;
}

export const QuestionItem = ({ currentQuestion }: Props) => {
    const { answer, question, answers } = currentQuestion;
    return (
        <div className="QuestionItem">
            <div>{answer}</div>
            {/* <Answers answer={answer} answers={answers} /> */}
        </div>
    );
};
