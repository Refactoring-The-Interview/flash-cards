import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./QuestionCardS.scss";
import ListGroup from "react-bootstrap/ListGroup";

export const QuestionCard = ({
    currentQuestions,
    setCurrentQuestion,
    setShowQuestionList,
}: any) => {
    return (
        <>
            {currentQuestions.map((question: any, index: number) => {
                let qnsweredColor = question.correct ? "success" : "danger";
                const difficultyColor = {
                    easy: "#198754", //success
                    medium: "#ffc107", // warning
                    hard: "#dc3545", // danger
                } as any;
                return (
                    <Button
                        variant="outline-light"
                        size="lg"
                        style={{ color: "black" }}
                        className="listBtn"
                        onClick={(e) => {
                            setCurrentQuestion(question);
                            setShowQuestionList(false);
                        }}
                    >
                        <Card className="listItem">
                            <Card.Header>
                                <Card.Text>{question.answer}</Card.Text>
                                <span
                                    className="difficulty"
                                    style={{
                                        borderTop: `4rem solid ${
                                            difficultyColor[
                                                question.difficulty[0]
                                            ]
                                        }`,
                                    }}
                                ></span>
                            </Card.Header>
                            <Card.Body>
                                <Button
                                    variant={`outline-${qnsweredColor}`}
                                    disabled
                                >
                                    Answered
                                </Button>
                                <div>
                                    {question.tags.map(
                                        (tag: string, index: number) => {
                                            return (
                                                <Badge bg="dark" key={index}>
                                                    {tag.toLocaleUpperCase()}
                                                </Badge>
                                            );
                                        }
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    </Button>
                );
            })}
        </>
    );
};
