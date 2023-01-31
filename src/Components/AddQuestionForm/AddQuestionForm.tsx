import React, { useContext, useState } from "react";
import "./AddQuestionFormS.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormGroup } from "react-bootstrap";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Difficulty, Tags } from "../../Apis/types";
import { DifficultySelect } from "../QuestionList/QuestionFilter/DifficultySelect/DifficultySelect";
import { QuestionFormInput } from "./QuestionFromInput/QuestionFormInput";
import { TagsSelect } from "./TagsSelect/TagsSelect";
import { FormTextArea } from "./FormTextArea/FormTextArea";

const AddQuestionForm = () => {
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

    const DefalutFormInputs = {
        difficulty: Difficulty.none,
    };

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

                            <DifficultySelect
                                value={difficulty}
                                setValue={setDifficulty}
                            />
                        </FormGroup>

                        <FormTextArea
                            value={question}
                            setValue={setQuestion}
                            title={"Questions"}
                        />

                        <QuestionFormInput
                            value={answers}
                            setValue={setAnswers}
                            title={"Answers"}
                        />

                        <QuestionFormInput
                            value={answer}
                            setValue={setAnswer}
                            title={"Correct Answer"}
                        />
                        <TagsSelect value={tags} setValue={setTags} />
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
