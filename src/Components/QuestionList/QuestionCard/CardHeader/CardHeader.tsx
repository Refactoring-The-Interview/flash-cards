import { Card } from "react-bootstrap";
import { Question } from "../../../../Apis/types";

interface Props {
    question: Question;
}

export const CardHeader = ({ question }: Props) => {
    const { answer, difficulty } = question;
    return (
        <>
            <Card.Text>{answer}</Card.Text>
            <div className={`difficulty ${difficulty}`}></div>
        </>
    );
};
