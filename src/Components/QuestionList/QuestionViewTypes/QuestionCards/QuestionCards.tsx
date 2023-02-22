import "./QuestionCardsS.scss";
import { Question, cardOrder } from "../../../../Apis/types";
import { QuestionCard } from "../../QuestionCard/QuestionCard";

interface Props {
    currentQuestions: Question[];
    showDelete: boolean;
}

export const QuestionCards = ({ currentQuestions, showDelete }: Props) => {
    return (
        <div className="QuestionCard">
            {currentQuestions
                .sort(
                    (a, b) => cardOrder(a.difficulty) - cardOrder(b.difficulty)
                )
                .map((question: Question, index: number) => {
                    return (
                        <div key={index}>
                            <QuestionCard
                                question={question}
                                showDelete={showDelete}
                            />
                        </div>
                    );
                })}
        </div>
    );
};
