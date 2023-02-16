import Modal from "react-bootstrap/Modal";
import iconSprite from "../../Assets/sprite.svg";
import "./DeleteQuestionButtonS.scss";
import { deleteQuestion } from "../../Apis/Questions/deleteQuestion";
import { Question } from "../../Apis/types";
import { QuestionCard } from "../QuestionList/QuestionCard/QuestionCard";
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { Button } from "react-bootstrap";

interface Props {
    question: Question;
}

export const DeleteQuestionButton = ({ question }: Props) => {
    return (
        <ConfirmButton
            variant="outline-danger"
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
            Delete
        </ConfirmButton>
    );
};
