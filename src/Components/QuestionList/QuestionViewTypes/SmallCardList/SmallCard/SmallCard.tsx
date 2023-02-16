import { Badge, Button, Card, OverlayTrigger, Popover } from "react-bootstrap";
import {
    Paths,
    Question,
    editQuestionPath,
    pathGenerator,
} from "../../../../../Apis/types";
import { useNavigate } from "react-router-dom";
import "./SmallCardS.scss";
import { QuestionTags } from "../../../QuestionTags/QuestionTags";
import { DeleteButton } from "../../../DeleteButton/DeleteButton";

interface Props {
    question: Question;
}

export const SmallCard = ({ question }: Props) => {
    const { answer, difficulty, correct, id, tags } = question;
    const isCorrect = correct ? "success" : "danger";
    const navigate = useNavigate();
    const edit = () => {
        navigate(editQuestionPath[Paths.questionEdit](id));
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">
                <Button variant="outline-primary" onClick={() => edit()}>
                    Edit Question
                </Button>
                <DeleteButton question={question} />
            </Popover.Header>
            <Popover.Body>
                <QuestionTags tags={tags} />
                <Badge bg={`${isCorrect}`}>Answered</Badge>
            </Popover.Body>
        </Popover>
    );

    return (
        <Card className="SmallCard">
            <span className={`difficulty ${difficulty}`}> </span>
            <OverlayTrigger
                trigger={["click"]}
                placement="right"
                overlay={popover}
            >
                <Card.Body className="card-body">
                    <Card.Text
                        className="card-text"
                        onClick={() =>
                            navigate(pathGenerator[Paths.question](id))
                        }
                    >
                        {answer}
                    </Card.Text>
                    <Button variant="outline-primary">info</Button>
                </Card.Body>
            </OverlayTrigger>
        </Card>
    );
};
