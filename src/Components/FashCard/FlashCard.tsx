import React, { useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { Question } from "../store/types";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";

const FlashCard = ({ QuestionList }: any) => {
    const [questions] = useLocalStorage(StorageKey.questionBank, []);
    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );
    const [currentQuestion, setCurrentQuestion] = useLocalStorage(
        StorageKey.currentQuestion,
        randomizer(questions)
    );

    console.log(currentQuestion);
    return (
        <main className="card">
            <div className="header">
                <div className="header-timer">
                    <Timer />
                </div>

                <div className="header-Question-list/filter">
                    <button
                        type="button"
                        className=" btn btn-info"
                        onClick={() => {
                            QuestionList(true);
                        }}
                    >
                        Question List
                    </button>
                </div>

                <button
                    type="button"
                    className=" btn-to-IDE btn btn-info"
                    onClick={() => {
                        // setFlipCardToIDE(true);
                    }}
                >
                    Submit
                </button>
            </div>

            <ArrayMethods cardQuestion={currentQuestion} />
            <button
                type="button"
                className="btn-next btn btn-info"
                onClick={(e) => {
                    setCurrentQuestion(
                        randomizer(
                            filteredQuestionBank?.length > 0 &&
                                filteredQuestionBank
                                ? filteredQuestionBank
                                : questions
                        )
                    );
                }}
            >
                Next Question
            </button>
            <AddQuestionForm />
        </main>
    );
};

export default FlashCard;
