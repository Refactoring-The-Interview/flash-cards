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

            {/* TODO Reset ArrayMethods when clicking on next question*/}
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
        </main>
    );
};

export default FlashCard;
