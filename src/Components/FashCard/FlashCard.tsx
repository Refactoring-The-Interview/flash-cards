import React, { useEffect, useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { questionBank } from "../store";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { Question } from "../store/types";
import { useLocalStorage, getStorageValue } from "../LocalStorage/LocalStorage";

const FlashCard = () => {
  // TODO Add new question to the localstorage question bank

  const [newQuestion, setNewQuestion] = useState<Question>({
    difficulty: "",
    question: "",
    answer: "",
    answers: [],
  });

  const [cardQuestion, setCardQuestion] = useState<Question>(
    randomizer(questionBank)
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
          setCardQuestion(randomizer(questionBank));
        }}
      >
        {" "}
        Next Question{" "}
      </button>
      <AddQuestionForm newQuestionState={setNewQuestion} />
    </main>
  );
};

export default FlashCard;
