import { DeleteQuestionButton } from "../../../DeleteQuestionButton/DeleteQuestionButton";
import { Question } from "../../../../Apis/types";
import "./DeleteButtonS.scss";

interface Props {
    question: Question;
}

export const DeleteButton = ({ question }: Props) => {
    return (
        <div className="DeleteButton">
            <DeleteQuestionButton question={question} />
        </div>
    );
};
