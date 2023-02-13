import Button from "react-bootstrap/Button";
import "./QuestionCardsS.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";

import {
    Difficulty,
    Paths,
    Question,
    editQuestionPath,
    pathGenerator,
} from "../../../../Apis/types";
import { QuestionCard } from "../../QuestionCard/QuestionCard";

interface Props {
    currentQuestions: Question[];
    showDelete: boolean;
}

const cardOrder = (difficulty: Difficulty): number => {
    switch (difficulty) {
        case Difficulty.easy:
            return 0;
        case Difficulty.medium:
            return 1;
        case Difficulty.hard:
            return 2;
        case Difficulty.none:
        default:
            return 3;
    }
};

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
                                {" "}
                                Edit{" "}
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
