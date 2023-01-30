import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./QuestionCardS.scss";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import { DeleteButton } from "../QuestionCards/DeleteButton/DeleteButton";
import { Question } from "../../../Apis/types";

interface CardProps {
    question: Question;
    showDelete?: boolean;
}

export const QuestionCard = ({ question, showDelete }: CardProps) => {
    const { answer, difficulty, tags, correct } = question;

    let answeredColor = correct ? "outline-success" : "outline-danger";

    return (
        <div className="QuestionCard">
            <Card className="listItem">
                <Card.Header>
                    {showDelete && <DeleteButton question={question} />}
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
