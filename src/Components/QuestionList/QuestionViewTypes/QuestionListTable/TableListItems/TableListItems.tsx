import { Badge } from "react-bootstrap";
import { Paths, Question, pathGenerator } from "../../../../../Apis/types";
import { useNavigate } from "react-router-dom";

interface Props {
    questions: Question[];
}

export const TableListItems = ({ questions }: Props) => {
    const navigate = useNavigate();

    return (
        <tr>
            {questions.map((currentQuestion) => {
                const { answer, difficulty, id } = currentQuestion;
                return (
                    <td>
                        <Badge pill bg="danger">
                            <span>{difficulty}</span>
                        </Badge>

                        <div
                            onClick={() => {
                                navigate(pathGenerator[Paths.question](id));
                            }}
                        >
                            <h5>{answer}</h5>
                        </div>
                    </td>
                );
            })}
        </tr>
    );
};
