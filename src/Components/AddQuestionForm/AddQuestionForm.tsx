import React, { useContext, useEffect, useState } from "react";
import "./AddQuestionFormS.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { API, Difficulty, Question, Tags } from "../store/types";
import { Form, FormGroup } from "react-bootstrap";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";

interface Props {
    difficulty: Difficulty;
    setDifficulty(newDifficulty: Difficulty): void;
}

const AddQuestionForm = (props: any) => {
    const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.none);
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [answers, setAnswers] = useState<string>("");
    const [tags, setTags] = useState<Array<Tags>>([]);
    const [didUpdate, setDidUpdate] = useState<boolean>(false);

    const { addQuestion } = useContext(MyQuestionContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearForm = () => {
        setDifficulty(Difficulty.none);
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
                    <Modal.Title>Question Addition From</Modal.Title>
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
                                    setDifficulty(e.target.value as Difficulty);
                                }}
                            >
                                <option value={Difficulty.none}>None</option>

                                <option value={Difficulty.easy}>Easy</option>
                                <option value={Difficulty.medium}>
                                    Medium
                                </option>
                                <option value={Difficulty.hard}>Hard</option>
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
                                    setTags([
                                        ...tags,
                                        e.target.value,
                                    ] as Tags[]);
                                }}
                            >
                                <option value={Tags.array}>array</option>
                                <option value={Tags.obj}>object</option>
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
                            addQuestion({
                                difficulty: difficulty,
                                question: question,
                                answer: answer,
                                answers: answers.split(","),
                                tags: [...tags, Tags.js],
                                id: question.length.toString(),
                                correct: false,
                            });
                            setDidUpdate(!didUpdate);
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
