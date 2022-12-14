import React, { useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { Question } from "../store/types";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";

const FlashCard = () => {
    const [questions] = useLocalStorage(StorageKey.questionBank, []);
    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );

    const [questionType, setQuestionType] = useState<string>("");

    if (questionType.length) {
        let test = questions.filter((question: any) => {
            return question.tags.includes(questionType);
        });
        console.log(test, "tewst");
        setFilteredQuestionBank(test);
    }

    const [cardQuestion, setCardQuestion] = useState<Question>(
        randomizer(questions)
    );

    return (
        <main className="card">
            <div className="card__header">
                <div className="card__header-timer">
                    <Timer />
                </div>

                <div className="card__header-count">1/5</div>

                <button type="button" className="btn btn-info">
                    Submit
                </button>
            </div>

            <ArrayMethods cardQuestion={cardQuestion} />
            <button
                type="button"
                className="card__btn-next btn btn-info"
                onClick={(e) => {
                    setCardQuestion(randomizer(questions));
                }}
            >
                {" "}
                Next Question{" "}
            </button>
            <AddQuestionForm />
            <form className="filter form-group">
                <label htmlFor="filterSelect">Filter By</label>
                <select id="filterSelect" className="form-control">
                    <option
                        onClick={(e) => {
                            setQuestionType("array");
                        }}
                    >
                        Array Methods
                    </option>

                    <option
                        onClick={(e) => {
                            console.log("hello");
                            setQuestionType("object");
                        }}
                    >
                        Objects
                    </option>
                </select>
            </form>
        </main>
    );
};

export default FlashCard;
