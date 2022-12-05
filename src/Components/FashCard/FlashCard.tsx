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
            <form className="form" onSubmit={(e) => {
              e.preventDefault()
              console.log(e.target)

              }}>
              <div className="form__difficulty">
              <label htmlFor="difficulty-options">difficulty select: </label>
              <select
                className="form__difficulty-options"
                id="difficulty-options"
                value={newQuestion.difficulty}
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <div className="form__question">
             <label htmlFor="questionTextArea">Question</label>
              <textarea
               className="form__question__descriptor form-control"
               id="questionTextArea"
               value={newQuestion.question}
               ></textarea>
            </div>

            <div className="form__answers">
             <label htmlFor="answersTextArea">Answers</label>
              <textarea
               className="form__answers__descriptor form-control"
               id="answersTextArea"
               value={newQuestion.answers}
               ></textarea>
            </div>

            <div className="form__answer">
             <label htmlFor="answerTextArea">Correct Answer</label>
              <textarea
               className="form__answer__descriptor form-control"
               id="answerTextArea"
               value={newQuestion.answers}
               ></textarea>
            </div>

            <button type="submit" className="btn btn-danger">Submit</button>
            </form>
          )
        }
    </main>
  )
}


export default FlashCard;