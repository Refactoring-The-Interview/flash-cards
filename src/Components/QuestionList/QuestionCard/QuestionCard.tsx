import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./QuestionCardS.scss";
import ListGroup from "react-bootstrap/ListGroup";

export const QuestionCard = ({ currentQuestions }: any) => {
    return currentQuestions.map((q: any, index: number) => {
        return (
            <Button variant="primary" size="lg" style={{ color: "black" }}>
                <Card className="listItem" style={{ width: "18rem" }}>
                    <Card.Header>
                        <Card.Text>{q.answer}</Card.Text>
                        <span className="difficulty"></span>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            {q.tags.map((tag: string, index: number) => {
                                return (
                                    <Badge bg="warring" key={index}>
                                        {tag}
                                    </Badge>
                                );
                            })}
                        </div>
                        <Button
                            variant="outline-secondary"
                            disabled
                            className="answered"
                        >
                            Answered
                        </Button>
                    </Card.Body>
                </Card>
            </Button>
        );
    });
};
