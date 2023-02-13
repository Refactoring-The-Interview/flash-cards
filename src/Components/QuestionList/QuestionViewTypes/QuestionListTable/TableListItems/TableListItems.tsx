import { Badge } from "react-bootstrap";
import { Question } from "../../../../../Apis/types";

interface Props {
    questions: Question[];
}

export const TableListItems = ({ questions }: Props) => {
    return (
        <>
            {questions.map((currentQuestion) => {
                const { answer, difficulty } = currentQuestion;
                return (
                    <td>
                        <Badge pill bg="danger">
                            <span>{difficulty}</span>
                        </Badge>

                        <div>
                            <h5>{answer}</h5>
                        </div>
                    </td>
                );
            })}
        </>
    );
};
