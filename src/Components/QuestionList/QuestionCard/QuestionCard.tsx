import { Card } from "react-bootstrap";
import { Question } from "../../../Apis/types";
import { QuestionTags } from "../QuestionTags/QuestionTags";
import { IsCorrectBadge } from "./IsCorrectBadge/IsCorrectBadge";
import "./QuestionCardS.scss";

interface CardProps {
    question: Question;
    showDelete?: boolean;
}

export const QuestionCard = ({ question, showDelete }: CardProps) => {
    const { answer, correct, tags, difficulty } = question;

    return (
        <div className="QuestionCard">
            <Card className="listItem">
                <Card.Header>
                    <Card.Text className="listItem-text">{answer}</Card.Text>
                    <div className={`difficulty ${difficulty}`}></div>
                </Card.Header>
                <Card.Body>
                    <IsCorrectBadge correct={correct} />
                    <QuestionTags tags={tags} />
                </Card.Body>
            </Card>
        </div>
    );
};
