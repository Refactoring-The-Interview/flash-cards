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

    const textAreas = ["Difficulty", "Question", "Answers", "Answer"];

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
                    className="form"
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
                    {textAreas.map((area: string, index: number) => {
                        return (
                            <div className={area} key={index}>
                                <label htmlFor={`${area}TextArea`}>
                                    {area}
                                </label>
                                <textarea
                                    onChange={(e) => {
                                        setQuestion(e.target.value);
                                    }}
                                    className="form-control"
                                    id={`${area}TextArea`}
                                    value={question}
                                ></textarea>
                            </div>
                        );
                    })}

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
