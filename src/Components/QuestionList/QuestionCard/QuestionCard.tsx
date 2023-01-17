import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./QuestionCardS.scss";

export const QuestionCard = ({ currentQuestions }: any) => {
    return currentQuestions.map((q: any, index: number) => {
        return (
            <Card className="QuestionCard">
                <Card.Body>{q.answer}</Card.Body>
            </Card>
        );
    });
};

{
    /* <Card className="card" key={index}>
<Card.Body>
    <Card.Title className="title">{q.answer}</Card.Title>
    <Card.Text className="text">{q.question}</Card.Text>
    <Card.Subtitle className="tags">
        Tags:
        {q.tags.map((tag: string, index: number) => {
            return (
                <h6>
                    <Badge
                        bg="warning"
                        text="dark"
                        className="tag"
                    >
                        {tag}
                    </Badge>
                </h6>
            );
        })}
    </Card.Subtitle>
    <Button
        variant="primary"
        onClick={(e) => {
            // setCurrentQuestion(questions[index]);
            // setShowQuestionList(false);
        }}
    >
        Select Question
    </Button>
</Card.Body>
</Card> */
}
