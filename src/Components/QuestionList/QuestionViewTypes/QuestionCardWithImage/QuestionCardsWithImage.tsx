import { Question, cardOrder } from "../../../../Apis/types";
import { CardWithImage } from "./CardWithImage/CardWithImage";
import "./QuestionCardsWithImageS.scss";

interface Props {
    currentQuestions: Question[];
    showDelete: boolean;
}

export const QuestionCardsWithImage = ({
    currentQuestions,
    showDelete,
}: Props) => {
    return (
        <div className="QuestionCardsWithImage">
            {currentQuestions
                .sort((a, b) => {
                    return cardOrder(a.difficulty) - cardOrder(b.difficulty);
                })
                .map((question) => {
                    return (
                        <CardWithImage
                            currentQuestion={question}
                            showDelete={showDelete}
                        />
                    );
                })}
        </div>
    );
};
