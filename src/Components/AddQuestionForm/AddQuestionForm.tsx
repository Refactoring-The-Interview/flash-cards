import React, { useState } from "react";
import "./AddQuestionFormS.scss";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Question } from "../store/types";

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
            <Button variant="primary" onClick={handleShow}>
                Add Question
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="Form">
                        <div className="difficulty form-group">
                            <label htmlFor="difficultyInput">Difficulty</label>
                            <select
                                className="form-control"
                                id="difficultyInput"
                                onChange={(e) => {
                                    setDifficulty(difficulty);
                                }}
                            >
                                <option>Hard</option>
                                <option>Medium</option>
                                <option>Easy</option>
                            </select>
                        </div>

                        <div className="question">
                            <label htmlFor="questionTextArea">Question</label>
                            <textarea
                                onChange={(e) => {
                                    setQuestion(e.target.value);
                                }}
                                className="inputArea form-control"
                                id="questionTextArea"
                                value={question}
                            ></textarea>
                        </div>

                        <div className="answers">
                            <label htmlFor="answersInput">Answers</label>
                            <input
                                className="inputArea form-control"
                                id="answersInput"
                                onChange={(e) => {
                                    setAnswers(e.target.value);
                                }}
                                value={answers}
                            ></input>
                        </div>

                        <div className="answer">
                            <label htmlFor="answerTextArea">
                                Correct Answer
                            </label>
                            <input
                                onChange={(e) => {
                                    setAnswer(e.target.value);
                                }}
                                className="inputArea form-control"
                                id="answerTextArea"
                                value={answer}
                            ></input>
                        </div>

                        <div className="tags">
                            <label htmlFor="tagsInput">Tags</label>
                            <select
                                className="inputArea form-control"
                                id="tagsInput"
                                multiple
                                onChange={(e) => {
                                    setTags([...tags, e.target.value]);
                                }}
                            >
                                <option>array</option>
                                <option>object</option>
                            </select>
                        </div>
                    </form>
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
