import randomizser from '../QuestionRandomizer/randomizer';


const arrayMethods = () => {
  const questionBank = [

    {
      difficulty: 'Medium',
      question: 'What method is used to method create a new array populated with the results of calling a provided function on every element in the calling array.',
      answer: 'a',
      a: 'Array.map()',
      b: 'Array.forEach()',
      c: 'Array.every()',
    },
    {
      difficulty: 'Medium',
      question: 'What method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.',
      answer: 'c',
      a:'Array.findIndex()',
      b:'Array.findLast()',
      c:"Array.find()"
    },
    {
      difficulty: 'Medium',
      question: 'what method executes a provided function once for each array element.',
      answer: 'b',
      a: 'Array.map()',
      b: 'Array.forEach()',
      c: 'Array.every()',
    },
    {
      difficulty: 'Medium',
      question: " What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
      answer: 'a',
      a:'Array.some()',
      b:'Array.filter',
      c:'Array.forEach()'
    },
    {
      difficulty: 'Medium',
      question: "What method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
      answer: 'Array.flat()',
      a:'Array.flat()',
      b:'Array.flatMap()',
      c:'Array.concat()'
    }

  ]

  const cardQuestion = randomizser(questionBank);
  const {difficulty, question, answer, a,b,c} = cardQuestion;
  return (
    <div className='card__question'>
      <div className='card__description'>
          {question}
      </div>

      <ul className='card__list'>
        <li className='card__item'>
          (A): {a}
        </li>
        <li className='card__item'>
          (B): {b}
        </li>
        <li className='card__item'>
          (C): {c}
        </li>
      </ul>

    </div>
  )
}

export default arrayMethods;