import randomizser from '../QuestionRandomizer/randomizer';


const ArrayMethods = (props: any) => {

  let questionBank = [

    {
      difficulty: 'Medium',
      question: 'What method is used to method create a new array populated with the results of calling a provided function on every element in the calling array.',
      answer: 'Array.map()',
      answers: ['Array.map()','Array.forEach()','Array.every()']
    },
    {
      difficulty: 'Medium',
      question: 'What method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.',
      answer: 'Array.find()',
      answers: ['Array.findIndex()','Array.findLast()','Array.find()']

    },
    {
      difficulty: 'Medium',
      question: 'what method executes a provided function once for each array element.',
      answer: 'Array.forEach()',
      answers: ['Array.map()','Array.forEach()','Array.every()']
    },
    {
      difficulty: 'Medium',
      question: " What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.",
      answer: 'Array.some()',
      answers: ['Array.some()','Array.filter','Array.forEach()']
    },
    {
      difficulty: 'Medium',
      question: "What method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
      answer: 'Array.flat()',
      answers: ['Array.flat()','Array.flatMap()','Array.concat()']
    }

  ]
  questionBank.push(props.question)

  const cardQuestion = randomizser(questionBank);
  const {difficulty, question, answer, answers} = cardQuestion;
  return (
    <div className='card__question'>
      <div className='card__description'>
          {question}
      </div>

      <ul className='card__list'>
        {
           answers.map((item:any, index:any)=> {
            return (
              <li className='card__item' key={index}>
                {item}
              </li>
            )
           })
        }
      </ul>

    </div>
  )
}

export default ArrayMethods;