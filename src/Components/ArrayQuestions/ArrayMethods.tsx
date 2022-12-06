import { useState } from 'react';
import './ArrayMethodsS.scss';


export const ArrayMethods = ({cardQuestion}: any) => {
  const [correctCss,] = useState("btn btn-success")
  const [incorrectCss,] = useState("btn btn-danger")
  const [defaultCss,] = useState("btn btn-outline-info")
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const { question, answer, answers} = cardQuestion;
  const isCorrect = selectedAnswer === answer
  const selectedCss = isCorrect ? correctCss : incorrectCss

  return (
    <div className='ArrayMethods'>
      <div className='description'>
          {question}
      </div>

      <ul className='list'>
        {
           answers.map((item:any, index:any)=> {

            return (
              <button
                type="button"
                className={`btn-item ${selectedAnswer ? selectedCss : defaultCss}`}
                key={index}
                onClick={(e)=> {
                  setSelectedAnswer(item)
                }}
              >
                {item}
              </button>
            )
           })
        }
      </ul>

    </div>
  )
}
