import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import Badge from "react-bootstrap/Badge";
import "./QuestionCardS.scss";
import { Question } from "../../store/types";

interface Props {
    currentQuestions: Question[];
    setCurrentQuestion(question: Question): void;
    setShowQuestionList(success: boolean): void;
}

export const QuestionCard = ({
    currentQuestions,
    setCurrentQuestion,
    setShowQuestionList,
}: Props) => {
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
                            setCurrentQuestion(question);
                            setShowQuestionList(false);
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
