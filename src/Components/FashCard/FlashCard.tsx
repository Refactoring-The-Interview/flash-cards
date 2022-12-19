import React, { useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { Question } from "../store/types";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";

interface Props {
    setFlipCardToIDE(successful: boolean): void;
}

const FlashCard = ({ setFlipCardToIDE }: Props) => {
    const [questions] = useLocalStorage(StorageKey.questionBank, []);
    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );

    const [questionType, setQuestionType] = useState<string>("");

    if (questionType) {
        let filter = questions.filter((question: Question) => {
            return question.tags.includes(questionType);
        });
        setFilteredQuestionBank(filter);
        setQuestionType("");
    }

    const [cardQuestion, setCardQuestion] = useState<Question>(
        randomizer(questions)
    );

    return (
        <main className="card">
            <div className="header">
                <div className="header-timer">
                    <Timer />
                </div>

                <div className="header-count">1/5</div>

                <button
                    type="button"
                    className=" btn-to-IDE btn btn-info"
                    onClick={() => {
                        setFlipCardToIDE(true);
                    }}
                >
                    Submit
                </button>
            </div>

            <ArrayMethods cardQuestion={cardQuestion} />
            <button
                type="button"
                className="btn-next btn btn-info"
                onClick={(e) => {
                    setCardQuestion(
                        randomizer(
                            filteredQuestionBank.length > 0
                                ? filteredQuestionBank
                                : questions
                        )
                    );
                }}
            >
                {" "}
                Next Question{" "}
            </button>
            <AddQuestionForm />
            <form className="filter form-group">
                <label htmlFor="filterSelect" className="label">
                    Filter By
                </label>
                <select
                    id="filterSelect"
                    className=" select form-control"
                    onChange={(e) => {
                        setQuestionType(e.target.value);
                    }}
                >
                    <option>array</option>
                    <option>object</option>
                </select>
            </form>
        </main>
    );
};

export default FlashCard;
