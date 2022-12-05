import ArrayMethods from "../ArrayQuestions/ArrayMethods";
import React, {useState} from "react";


const FlashCard = () => {

  const [newQuestion, setNewQuestion] = useState({
    difficulty: '',
    question: '',
    answer: '',
    answers: []
  });
  const [addQuestion, setAddQuestion] = useState(false);


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
        <button
          type="button"
          className="btn btn-success"
          onClick={(e)=> {setAddQuestion(!addQuestion)}}>Add</button>
        {
          addQuestion && (
            <form className="form">
              <div className="form__difficulty">
              <label htmlFor="difficultyFormControlSelect1">difficulty select: </label>
              <select className="form__difficulty-options" id="difficultyFormControlSelect1">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            </form>
          )
        }
    </main>
  )
}


export default FlashCard;