import { Badge } from "react-bootstrap";
import { Question } from "../../../../Apis/types";
import { QuestionTags } from "../../QuestionTags/QuestionTags";

interface Props {
    question: Question;
}

export const CardBody = ({ question }: Props) => {
    const { correct, tags } = question;
    const variant = correct ? "success" : "danger";
    return (
        <>
            <Badge bg={variant}>answer</Badge>
            <QuestionTags tags={tags} />
        </>
    );
};
