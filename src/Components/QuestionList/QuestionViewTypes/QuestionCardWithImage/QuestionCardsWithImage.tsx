import { useContext } from "react";
import { Question, cardOrder } from "../../../../Apis/types";
import { QuestionListContext } from "../../../Context/QuestionListContext";
import { CardWithImage } from "./CardWithImage/CardWithImage";
import "./QuestionCardsWithImageS.scss";

export const QuestionCardsWithImage = () => {
    const { currentQuestions, showDelete } = useContext(QuestionListContext);

    return (
        <div className="QuestionCardsWithImage">
            {currentQuestions
                .sort((a, b) => {
                    return cardOrder(a.difficulty) - cardOrder(b.difficulty);
                })
                .map((question, index) => {
                    return (
                        <div key={index}>
                            <CardWithImage
                                currentQuestion={question}
                                showDelete={showDelete}
                            />
                        </div>
                    );
                })}
        </div>
    );
};
