import React, { useState } from "react";
import { Question } from "../store/types";
import "./AddQuestionFormS.scss";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";

const AddQuestionForm = (props: any) => {
    const [addQuestion, setAddQuestion] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [answers, setAnswers] = useState<string>("");
    const [questionBank, setNewQuestionBank] = useLocalStorage(
        StorageKey.questionBank,
        []
    );

    const [newQuestion, setNewQuestion] = useState<Question>({
        difficulty: "medium",
        question: "This is a test",
        answer: "a",
        answers: ["a", "b"],
    });

    return (
        <div className="container">
            <button
                type="button"
                className="btn"
                onClick={(e) => {
                    setAddQuestion(!addQuestion);
                }}
            >
                Add
            </button>
            {addQuestion && (
                <form
                    className="Form"
                    onSubmit={(e) => {
                        e.preventDefault();

                        // we don't need a new question sate, put it as a variable
                        setNewQuestion({
                            difficulty: difficulty,
                            question: question,
                            answer: answer,
                            answers: answers.split(" "),
                        });
                        questionBank.push(newQuestion);
                        setNewQuestionBank(questionBank);
                    }}
                >
                    <div className="difficulty form-group">
                        <label htmlFor="difficultyInput">Difficulty</label>
                        <select className="form-control" id="difficultyInput">
                            <option
                                onClick={(e) => {
                                    setDifficulty("Hard");
                                }}
                            >
                                Hard
                            </option>
                            <option
                                onClick={(e) => {
                                    setDifficulty("Medium");
                                }}
                            >
                                Medium
                            </option>
                            <option
                                onClick={(e) => {
                                    setDifficulty("Easy");
                                }}
                            >
                                Easy
                            </option>
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
                                let questionArray = e.target.value;
                                setAnswers(questionArray);
                            }}
                            value={answers}
                        ></input>
                    </div>

                    <div className="answer">
                        <label htmlFor="answerTextArea">Correct Answer</label>
                        <input
                            onChange={(e) => {
                                setAnswer(e.target.value);
                            }}
                            className="inputArea form-control"
                            id="answerTextArea"
                            value={answer}
                        ></input>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-danger from__submit--btn"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default AddQuestionForm;
