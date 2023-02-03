import { Card } from "react-bootstrap";
import { Question } from "../../../Apis/types";
import "./QuestionCardS.scss";
import { CardBody } from "./CardBody/CardBody";
import { CardHeader } from "./CardHeader/CardHeader";

interface QuestionCardProps {
    question: Question;
    showDelete?: boolean;
}

export const QuestionCard = ({ question, showDelete }: QuestionCardProps) => {
    return (
        <div className="QuestionCard">
            <Card className="istItem">
                <Card.Header>
                    <CardHeader question={question} />
                </Card.Header>
                <Card.Body>
                    <CardBody question={question} />
                </Card.Body>
            </Card>
        </div>
    );
};
