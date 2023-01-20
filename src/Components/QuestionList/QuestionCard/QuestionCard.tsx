import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import Badge from "react-bootstrap/Badge";
import "./QuestionCardS.scss";
import { Paths, Question, pathGenerator } from "../../store/types";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
    currentQuestions: Question[];
}

export const QuestionCard = ({ currentQuestions }: Props) => {
    const navigate = useNavigate();
    let { questionId } = useParams();

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
