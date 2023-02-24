import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./QuestionCardS.scss";
import { QuestionTags } from "../QuestionTags/QuestionTags";

import {
    Paths,
    Question,
    editQuestionPath,
    pathGenerator,
} from "../../../Apis/types";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { EditButton } from "../EditButton/EditButton";

interface CardProps {
    question: Question;
    showDelete?: boolean;
}

export const QuestionCard = ({ question, showDelete }: CardProps) => {
    const { answer, difficulty, tags, correct, id } = question;

    const answeredColor = correct ? "outline-success" : "outline-danger";
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="QuestionCard">
            <Card className="listItem">
                <Card.Header
                    onClick={() => {
                        if (!showDelete) {
                            navigate(pathGenerator[Paths.question](id));
                        }
                    }}
                >
                    {showDelete && <DeleteButton question={question} />}
                    <Card.Text className="listItem-text">{answer}</Card.Text>
                    <span className={`difficulty ${difficulty}`}></span>
                </Card.Header>
                <Card.Body>
                    <Button variant={`${answeredColor}`} disabled>
                        Answered
                    </Button>
                    <QuestionTags tags={tags} />
                    <EditButton id={id} />
                </Card.Body>
            </Card>
        </div>
    );
};
