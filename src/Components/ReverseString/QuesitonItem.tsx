import { Question } from "../../Apis/types";
import "./QuestionItemS.scss";

interface Props {
    currentQuestion: Question;
}

export const QuestionItem = ({ currentQuestion }: Props) => {
    const { question, answer, style } = currentQuestion;

    return (
        <div>
            {style === 0 && (
                <div className="QuestionItem">
                    <div>
                        <p>{question}</p>
                    </div>

                    <div>
                        <h5>{answer}</h5>
                    </div>
                </div>
            )}
        </div>
    );
};
