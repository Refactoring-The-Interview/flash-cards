import Button from "react-bootstrap/Button";
import "./QuestionCardsS.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
    Paths,
    Question,
    cardOrder,
    editQuestionPath,
    pathGenerator,
} from "../../../../Apis/types";
import { QuestionCard } from "../../QuestionCard/QuestionCard";

interface Props {
    currentQuestions: Question[];
    showDelete: boolean;
}

export const QuestionCards = ({ currentQuestions, showDelete }: Props) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="QuestionCard">
            {currentQuestions
                .sort(
                    (a, b) => cardOrder(a.difficulty) - cardOrder(b.difficulty)
                )
                .map((question: Question, index: number) => {
                    return (
                        <div>
                            <Button
                                onClick={() => {
                                    navigate(
                                        editQuestionPath[Paths.questionEdit](
                                            question.id
                                        )
                                    );
                                }}
                            >
                                Edit
                            </Button>

                            <Button
                                variant="outline-light"
                                size="lg"
                                className="listBtn"
                                key={index}
                                onClick={(e) => {
                                    if (!showDelete) {
                                        navigate(
                                            pathGenerator[Paths.question](
                                                question.id
                                            )
                                        );
                                    }
                                }}
                            >
                                <QuestionCard
                                    question={question}
                                    showDelete={showDelete}
                                />
                            </Button>
                        </div>
                    );
                })}
        </div>
    );
};
