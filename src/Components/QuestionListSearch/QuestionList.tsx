import { Question } from "../../Apis/types";
import "./QuestionListS.scss";

interface Props {
    filteredQuestions: Question[];
}

export const QuestionList = ({ filteredQuestions }: Props) => {
    return (
        <div className="QuestionList">
            {filteredQuestions.map((currentQuestion) => {
                const { question } = currentQuestion;
                return <div className="QuestionList-Item">{question}</div>;
            })}
        </div>
    );
};
