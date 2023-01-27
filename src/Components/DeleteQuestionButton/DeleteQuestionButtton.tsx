import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuestion } from "../../Apis/Questions/deleteQuestion";
import { QuestionCards } from "../QuestionList/QuestionCards/QuestionCards";
import { Question } from "../../Apis/types";
import { QuestionCard } from "../QuestionList/QuestionCard/QuestionCard";

export const DeleteQuestionButton = ({ question }: any) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete Question
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>HELLO</Modal.Title>
                    <QuestionCard question={question} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel and Close
                    </Button>
                    <Button
                        type="button"
                        variant="danger"
                        onClick={(e) => {
                            deleteQuestion(question as any);
                            handleClose();
                        }}
                    >
                        Confirm Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
