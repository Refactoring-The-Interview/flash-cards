import Modal from "react-bootstrap/Modal";
import { deleteQuestion } from "../../Apis/Questions/deleteQuestion";
import { Question } from "../../Apis/types";
import { QuestionCard } from "../QuestionList/QuestionCard/QuestionCard";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";

interface Props {
    question: Question;
}

export const DeleteQuestionButton = ({ question }: Props) => {
    return (
        <ConfirmButton
            variant="danger"
            onConfirm={() => {
                deleteQuestion(question.id);
            }}
            modalTitle={"Confirm Delete"}
            modalBody={
                <>
                    <Modal.Title>Question to delete</Modal.Title>
                    <QuestionCard question={question} />
                </>
            }
        >
            Delete Question
        </ConfirmButton>
    );
};
