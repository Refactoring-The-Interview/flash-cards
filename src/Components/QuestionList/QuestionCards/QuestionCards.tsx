import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import "./QuestionCardsS.scss";
import { useNavigate } from "react-router-dom";
import { Paths, Question, pathGenerator } from "../../../Apis/types";
import { QuestionCard } from "../QuestionCard/QuestionCard";

interface Props {
    currentQuestions: Question[];
}

export const QuestionCards = ({ currentQuestions }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="QuestionCard">
            {currentQuestions.map((question: Question, index: number) => {
                return (
                    <Button
                        variant="outline-light"
                        size="lg"
                        className="listBtn"
                        key={index}
                        onClick={(e) => {
                            navigate(
                                pathGenerator[Paths.question](question.id)
                            );
                        }}
                    >
                        <QuestionCard question={question} />
                    </Button>
                );
            })}
        </div>
    );
};
