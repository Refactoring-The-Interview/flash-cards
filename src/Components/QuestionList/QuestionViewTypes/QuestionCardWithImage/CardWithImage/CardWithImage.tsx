import { Card } from "react-bootstrap";
import { Question } from "../../../../../Apis/types";
import jsImage from "../../../../../Assets/1627664298-javascript.jpg";
import { QuestionTags } from "../../../QuestionTags/QuestionTags";
import "./CardWithImageS.scss";

interface Props {
    currentQuestion: Question;
    showDelete: boolean;
}

export const CardWithImage = ({ currentQuestion, showDelete }: Props) => {
    const { question, answer, answers, tags, correct, difficulty } =
        currentQuestion;

    return (
        <Card className={`CardWithImage`}>
            <Card.Header>
                <Card.Img src={jsImage} width={70} height={70} />
            </Card.Header>

            <Card.Body>
                <Card.Title>{answer}</Card.Title>
                <QuestionTags tags={tags} />
            </Card.Body>

            <Card.Footer className={`difficulty ${difficulty}`}></Card.Footer>
        </Card>
    );
};
