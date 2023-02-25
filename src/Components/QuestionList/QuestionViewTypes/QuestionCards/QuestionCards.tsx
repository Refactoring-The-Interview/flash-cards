import "./QuestionCardsS.scss";
import { Question, cardOrder } from "../../../../Apis/types";
import { QuestionCard } from "../../QuestionCard/QuestionCard";
import { useContext } from "react";
import { QuestionListContext } from "../../../Context/QuestionListContext";

// interface Props {
//     currentQuestions: Question[];
//     showDelete: boolean;
// }

export const QuestionCards = () => {
    const { currentQuestions, showDelete } = useContext(QuestionListContext);

    console.log(showDelete, "delete state from context");

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
