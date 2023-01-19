import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import Badge from "react-bootstrap/Badge";
import "./QuestionCardS.scss";
import { Question } from "../../store/types";

export const QuestionCard = ({
    currentQuestions,
    setCurrentQuestion,
    setShowQuestionList,
}: any) => {
    return (
        <div className="QuestionCard">
            {currentQuestions.map((question: Question, index: number) => {
                let answeredColor = question.correct ? "success" : "danger";
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
                                <QuestionTags tags={question.tags} />

                                <Button
                                    variant={`outline-${answeredColor}`}
                                    disabled
                                >
                                    Answered
                                </Button>
                            </Card.Body>
                        </Card>
                    </Button>
                );
            })}
        </div>
    );
};
