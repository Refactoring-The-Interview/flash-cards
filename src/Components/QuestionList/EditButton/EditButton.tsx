import { Button } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Paths, editQuestionPath } from "../../../Apis/types";

interface Props {
    id: string;
}

export const EditButton = ({ id }: Props) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <Button
            variant="outline-secondary"
            onClick={() => {
                navigate(editQuestionPath[Paths.questionEdit](id));
            }}
        >
            ✎
        </Button>
    );
};
