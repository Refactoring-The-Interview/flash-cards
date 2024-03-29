import "./QuestionCardsS.scss";
import { Question, cardOrder } from "../../../../Apis/types";
import { QuestionCard } from "../../QuestionCard/QuestionCard";
import { useContext } from "react";
import { QuestionListContext } from "../../../Context/QuestionListContext";

export const QuestionCards = () => {
    const { currentQuestions, showDelete } = useContext(QuestionListContext);

    return (
        <div className="QuestionCards">
            {currentQuestions
                .sort(
                    (a, b) => cardOrder(a.difficulty) - cardOrder(b.difficulty)
                )
                .map((question: Question, index: number) => {
                    return (
                        <div key={index} className="QuestionCard">
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
