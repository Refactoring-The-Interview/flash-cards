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
    const [tags, setTags] = useState<string>("");
    const [questionBank, setNewQuestionBank] = useLocalStorage(
        StorageKey.questionBank,
        []
    );

    return (
        <div className="container">
            <button
                type="button"
                className="btn"
                onClick={(e) => {
                    setAddQuestion(!addQuestion);
                }}
            >
                {!addQuestion ? "Add" : "Close"}
            </button>
            {addQuestion && (
                <form
                    className="Form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        questionBank.push({
                            difficulty: difficulty,
                            question: question,
                            answer: answer,
                            answers: answers.split(" "),
                            tags: tags.split(" "),
                        } as Question);
                        setNewQuestionBank(questionBank);
                    }}
                >
                    <div className="difficulty form-group">
                        <label htmlFor="difficultyInput">Difficulty</label>
                        <select
                            className="form-control"
                            id="difficultyInput"
                            onChange={(e) => {
                                setDifficulty(e.target.value);
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

                    <div className="tags">
                        <label htmlFor="tagsInput">Tags</label>
                        <input
                            className="inputArea form-control"
                            id="tagsInput"
                            onChange={(e) => {
                                setTags(e.target.value);
                            }}
                            value={tags}
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
