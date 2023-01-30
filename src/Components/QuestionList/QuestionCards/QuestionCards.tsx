import Button from "react-bootstrap/Button";
import "./QuestionCardsS.scss";
import { useNavigate } from "react-router-dom";
import {
    Difficulty,
    Paths,
    Question,
    pathGenerator,
} from "../../../Apis/types";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { DeleteQuestionButton } from "../../DeleteQuestionButton/DeleteQuestionButtton";
import { DeleteButton } from "./DeleteButton/DeleteButton";

interface Props {
    currentQuestions: Question[];
    showDelete: boolean;
    setShowDelete(showDelete: boolean): void;
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

export const QuestionCards = ({
    currentQuestions,
    showDelete,
    setShowDelete,
}: Props) => {
    const navigate = useNavigate();
    return (
        <div className="QuestionCard">
            {currentQuestions
                .sort(
                    (a, b) => cardOrder(a.difficulty) - cardOrder(b.difficulty)
                )
                .map((question: Question, index: number) => {
                    return (
                        <div>
                            {showDelete && <DeleteButton question={question} />}
                            <Button
                                variant="outline-light"
                                size="lg"
                                className="listBtn"
                                key={index}
                                onClick={(e) => {
                                    navigate(
                                        pathGenerator[Paths.question](
                                            question.id
                                        )
                                    );
                                }}
                            >
                                <QuestionCard question={question} />
                            </Button>
                        </div>
                    );
                })}
        </div>
    );
};
