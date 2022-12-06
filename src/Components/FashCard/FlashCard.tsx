import React, {useState} from "react";
import ArrayMethods from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";


const FlashCard = () => {

  const [newQuestion, setNewQuestion] = useState({
    difficulty: '',
    question: '',
    answer: '',
    answers: []
  }) as any

  return (
    <main className="card">

      <div className="card__header">
        <div className="card__header-timer">
          timer
        </div>

        <div className="card__header-count">
          1/5
        </div>

        <button> Submit </button>

      </div>

        < ArrayMethods question = {newQuestion} />
        <AddQuestionForm newQuestionState={setNewQuestion} />

    </main>
  )
}


export default FlashCard;