import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./QuestionCardS.scss";
import { Question } from "../../../Apis/types";
import { QuestionTags } from "../QuestionTags/QuestionTags";

export const QuestionCard = ({ question }: any) => {
    const { answer, difficulty, tags, correct } = question;

    let answeredColor = correct ? "outline-success" : "outline-danger";

    return (
        <div className="QuestionCard">
            <Card className="listItem">
                <Card.Header>
                    <Card.Text className="listItem-text">{answer}</Card.Text>
                    <span className={`difficulty ${difficulty}`}></span>
                </Card.Header>
                <Card.Body>
                    <Button variant={`${answeredColor}`} disabled>
                        Answered
                    </Button>
                    <QuestionTags tags={tags} />
                </Card.Body>
            </Card>
        </div>
    );
};
