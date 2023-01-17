import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./QuestionCardS.scss";
import ListGroup from "react-bootstrap/ListGroup";

export const QuestionCard = ({ currentQuestions }: any) => {
    return currentQuestions.map((q: any, index: number) => {
        return (
            <Button
                variant="outline-light"
                size="lg"
                style={{ color: "black" }}
                className="listBtn"
            >
                <Card className="listItem">
                    <Card.Header>
                        <Card.Text>{q.answer}</Card.Text>
                        <span className="difficulty"></span>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="outline-danger" disabled>
                            Answered
                        </Button>
                        <div>
                            {q.tags.map((tag: string, index: number) => {
                                return (
                                    <Badge bg="dark" key={index}>
                                        {tag.toLocaleUpperCase()}
                                    </Badge>
                                );
                            })}
                        </div>
                    </Card.Body>
                </Card>
            </Button>
        );
    });
};
