import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import "./QuestionCardsS.scss";
import { Paths, Question, pathGenerator } from "../../store/types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Props {
    currentQuestions: Question[];
}

export const QuestionCards = ({ currentQuestions }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="QuestionCard">
            {currentQuestions.map((question: Question, index: number) => {
                let answeredColor = question.correct
                    ? "outline-success"
                    : "outline-danger";
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
                        <Card className="listItem">
                            <Card.Header>
                                <Card.Text className="listItem-text">
                                    {question.answer}
                                </Card.Text>
                                <span
                                    className={`difficulty ${question.difficulty}`}
                                ></span>
                            </Card.Header>
                            <Card.Body>
                                <Button variant={`${answeredColor}`} disabled>
                                    Answered
                                </Button>
                                <QuestionTags tags={question.tags} />
                            </Card.Body>
                        </Card>
                    </Button>
                );
            })}
        </div>
    );
};
