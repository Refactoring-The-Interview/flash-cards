import React, { useState } from "react";
import "./AddQuestionFormS.scss";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Difficulty, Question } from "../store/types";
import { Form, FormGroup } from "react-bootstrap";

const AddQuestionForm = (props: any) => {
    const [difficulty, setDifficulty] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [answers, setAnswers] = useState<string>("");
    const [tags, setTags] = useState<Array<string>>([]);
    const [questionBank, setNewQuestionBank] = useLocalStorage(
        StorageKey.questionBank,
        []
    );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearForm = () => {
        setDifficulty("");
        setQuestion("");
        setAnswer("");
        setAnswers("");
        setTags([]);
    };

    return (
        <>
            <Button onClick={handleShow} variant="secondary">
                Add Question
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="Form">
                        <FormGroup className="difficulty form-group">
                            <Form.Label htmlFor="difficultyInput">
                                Difficulty
                            </Form.Label>
                            <Form.Select
                                className="form-control"
                                id="difficultyInput"
                                onChange={(e) => {
                                    setDifficulty(e.target.value);
                                }}
                            >
                                <option>Hard</option>
                                <option>Medium</option>
                                <option>Easy</option>
                            </Form.Select>
                        </FormGroup>

                        <FormGroup className="question">
                            <Form.Label htmlFor="questionTextArea">
                                Question
                            </Form.Label>
                            <textarea
                                onChange={(e) => {
                                    setQuestion(e.target.value);
                                }}
                                className="inputArea form-control"
                                id="questionTextArea"
                                value={question}
                                placeholder="Question"
                            ></textarea>
                        </FormGroup>

                        <FormGroup className="answers">
                            <Form.Label htmlFor="answersInput">
                                Answers
                            </Form.Label>
                            <input
                                className="inputArea form-control"
                                id="answersInput"
                                onChange={(e) => {
                                    setAnswers(e.target.value);
                                }}
                                value={answers}
                                placeholder="Answers"
                            ></input>
                        </FormGroup>

                        <FormGroup className="answer">
                            <Form.Label htmlFor="answerTextArea">
                                Correct Answer
                            </Form.Label>
                            <input
                                onChange={(e) => {
                                    setAnswer(e.target.value);
                                }}
                                className="inputArea form-control"
                                id="answerTextArea"
                                value={answer}
                                placeholder="Correct Answer"
                            ></input>
                        </FormGroup>

                        <FormGroup className="tags">
                            <Form.Label htmlFor="tagsInput">Tags</Form.Label>
                            <Form.Select
                                className="inputArea form-control"
                                id="tagsInput"
                                multiple
                                onChange={(e) => {
                                    setTags([...tags, e.target.value]);
                                }}
                            >
                                <option>array</option>
                                <option>object</option>
                            </Form.Select>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={(e) => {
                            questionBank.push({
                                difficulty: difficulty,
                                question: question,
                                answer: answer,
                                answers: answers.split(","),
                                tags: tags,
                            } as Question);
                            setNewQuestionBank(questionBank);
                            handleClose();
                            clearForm();
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
