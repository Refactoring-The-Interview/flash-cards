import { Card } from "react-bootstrap";
import { Paths, Question, pathGenerator } from "../../../../../Apis/types";
import jsImage from "../../../../../Assets/1627664298-javascript.jpg";
import { QuestionTags } from "../../../QuestionTags/QuestionTags";
import "./CardWithImageS.scss";
import { EditButton } from "../../../EditButton/EditButton";
import { useNavigate } from "react-router-dom";
import { DeleteButton } from "../../../DeleteButton/DeleteButton";

interface Props {
    currentQuestion: Question;
    showDelete: boolean;
}

export const CardWithImage = ({ currentQuestion, showDelete }: Props) => {
    const { answer, tags, difficulty, id } = currentQuestion;
    const navigate = useNavigate();

    return (
        <Card
            className={`CardWithImage`}
            onClick={(e) => {
                if (!showDelete) {
                    navigate(pathGenerator[Paths.question](id));
                }
            }}
        >
            <Card.Header>
                <Card.Img src={jsImage} width={70} height={70} />
            </Card.Header>

            <Card.Body className="CardWithImage-body">
                <div>
                    <Card.Title>{answer}</Card.Title>
                    <QuestionTags tags={tags} />
                </div>
                <div>
                    {showDelete ? (
                        <DeleteButton question={currentQuestion} />
                    ) : (
                        <EditButton id={id} />
                    )}
                </div>
            </Card.Body>

            <Card.Footer className={`difficulty ${difficulty}`}></Card.Footer>
        </Card>
    );
};
