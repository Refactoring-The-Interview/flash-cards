import React, {useState, useCallback} from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import './FlashCardS.scss';
import { questionBank } from "../Store";
import { randomizer } from "../QuestionRandomizer/randomizer";


const FlashCard = () => {

  // TODO Add new question to the localstorage question bank
  const [newQuestion, setNewQuestion] = useState({
    difficulty: '',
    question: '',
    answer: '',
    answers: []
  }) as any
  const [cardQuestion, setCardQuestion] = useState(randomizer(questionBank));

  return (
    <main className="card">
      <div className="card__header">
        <div className="card__header-timer">
          <Timer />
        </div>

        <div className="card__header-count">
          1/5
        </div>

      <button type="button" className="btn btn-info">Submit</button>

      </div>

      {/* TODO Reset ArrayMethods when clicking on next question*/}
        <ArrayMethods cardQuestion={cardQuestion} />
        <button
          type="button"
          className="card__btn-next btn btn-info"
          onClick={(e)=> {
            setCardQuestion(randomizer(questionBank))
          }}
          > Next Question </button>
        <AddQuestionForm newQuestionState={setNewQuestion} />

    </main>
  )
}


export default FlashCard;
