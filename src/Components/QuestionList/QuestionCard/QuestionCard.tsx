import Card from "react-bootstrap/Card";
import "./QuestionCardS.scss";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import { DeleteButton } from "../QuestionCards/DeleteButton/DeleteButton";
import { Question } from "../../../Apis/types";
import { Badge } from "react-bootstrap";

interface QuestionCardProps {
    question: Question;
    showDelete?: boolean;
}

export const QuestionCard = ({ question, showDelete }: QuestionCardProps) => {
    const { answer, difficulty, tags, correct } = question;

    const variation = correct ? "success" : "danger";

    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Text>{answer}</Card.Text>
                    <div className={`difficulty ${difficulty}`}></div>
                </Card.Header>
                <Card.Body>
                    {showDelete && <DeleteButton question={question} />}
                    <Badge bg={variation}>answered</Badge>
                    <QuestionTags tags={tags} />
                </Card.Body>
            </Card>
        </div>
    );
};
