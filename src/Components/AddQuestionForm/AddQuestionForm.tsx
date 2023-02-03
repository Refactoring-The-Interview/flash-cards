import React, { useContext, useState } from "react";
import "./AddQuestionFormS.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormGroup } from "react-bootstrap";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Difficulty, Question, Tags } from "../../Apis/types";
import { DifficultySelect } from "../QuestionList/QuestionFilter/DifficultySelect/DifficultySelect";

import { TagsSelect } from "./TagsSelect/TagsSelect";
import { FormTextArea } from "./FormTextArea/FormTextArea";
import { QuestionFormAnswers } from "./QuestionFormAnswers/QuestionFormAnswers";
import { FormInput } from "./FromInput/FormInput";

interface Props {
    variantButton: string;
}

const AddQuestionForm = ({ variantButton }: Props) => {
    const { questions, addQuestion } = useContext(MyQuestionContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const DefaultFormInputs: Question = {
        difficulty: Difficulty.none,
        question: "",
        answer: "",
        answers: ["", "", ""],
        tags: [Tags.js],
        correct: false,
        id: (questions.length + 1).toString(),
    };

    const [formInputs, setFormInputs] = useState<Question>(DefaultFormInputs);

    return (
        <>
            <Button onClick={handleShow} variant={variantButton}>
                Add Question
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Question Addition From</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="Form">
                        <FormGroup className="difficulty form-group">
                            <Form.Label htmlFor="difficultyInput">
                                Difficulty
                            </Form.Label>

                            <DifficultySelect
                                value={formInputs.difficulty}
                                setValue={(difficulty) => {
                                    setFormInputs({
                                        ...formInputs,
                                        difficulty,
                                    });
                                }}
                            />
                        </FormGroup>

                        <FormTextArea
                            value={formInputs.question}
                            setValue={(question) => {
                                setFormInputs({
                                    ...formInputs,
                                    question,
                                });
                            }}
                            title={"Questions"}
                        />

                        <QuestionFormAnswers
                            value={formInputs.answers}
                            setValue={(answers) => {
                                setFormInputs({
                                    ...formInputs,
                                    answers,
                                });
                            }}
                        />

                        <FormInput
                            value={formInputs.answer}
                            setValue={(answer) => {
                                setFormInputs({
                                    ...formInputs,
                                    answer,
                                });
                            }}
                            title={"Correct Answer"}
                        />
                        <TagsSelect
                            value={formInputs.tags}
                            setValue={(tags) => {
                                setFormInputs({
                                    ...formInputs,
                                    tags,
                                });
                            }}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-secondary"
                        onClick={() => {
                            setFormInputs(DefaultFormInputs);
                        }}
                    >
                        Reset Form
                    </Button>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={(e) => {
                            addQuestion(formInputs);
                            handleClose();
                            setFormInputs(DefaultFormInputs);
                        }}
                    >
                        Save and Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddQuestionForm;
