import React, {useState, useCallback} from "react";
import ArrayMethods from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";

const FlashCard = () => {

  const [newQuestion, setNewQuestion] = useState({
    difficulty: '',
    question: '',
    answer: '',
    answers: []
  }) as any
  const [, updateState] = useState({});
  const update = useCallback(() => updateState({}), [])

  return (
    <main className="card">

      <div className="card__header">
        <div className="card__header-timer">
          <Timer />
        </div>

        <div className="card__header-count">
          1/5
        </div>

        <button> Submit </button>

      </div>

        < ArrayMethods question = {newQuestion} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e)=> {
            update()
          }}
          > Next Question </button>
        <AddQuestionForm newQuestionState={setNewQuestion} />

    </main>
  )
}


export default FlashCard;
