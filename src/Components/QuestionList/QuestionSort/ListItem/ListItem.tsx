import { ListGroup } from "react-bootstrap";
import { Question } from "../../../../Apis/types";
import "./ListItemS.scss";
import { QuestionCards } from "../../QuestionCards/QuestionCards";

interface ListProps {
    questions: Question[];
    type: string;
}

export const ListItem = ({ questions, type }: ListProps) => {
    return (
        <ListGroup.Item>
            <h3 className="ListItem-title"> {type}</h3>
            <QuestionCards currentQuestions={questions} showDelete={false} />
        </ListGroup.Item>
    );
};
