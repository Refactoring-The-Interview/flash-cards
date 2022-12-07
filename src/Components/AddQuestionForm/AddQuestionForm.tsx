import React, { useState } from "react";
import "./AddQuestionFormS.scss";

const AddQuestionForm = (props: any) => {
  const [addQuestion, setAddQuestion] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState("") as any;

  return (
    <div className="container">
      <button
        type="button"
        className="btn"
        onClick={(e) => {
          setAddQuestion(!addQuestion);
        }}
      >
        Add
      </button>
      {addQuestion && (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            props.newQuestionState({
              difficulty: difficulty,
              question: question,
              answer: answer,
              answers: answers.split(" "),
            });
          }}
        >
          <div className="form__difficulty">
            <label htmlFor="difficultyTextArea">Difficulty</label>
            <textarea
              onChange={(e) => {
                setDifficulty(e.target.value);
              }}
              className="form__question__descriptor form-control"
              id="difficultyTextArea"
              value={difficulty}
            ></textarea>
          </div>

          <div className="form__question">
            <label htmlFor="questionTextArea">Question</label>
            <textarea
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              className="form__question__descriptor form-control"
              id="questionTextArea"
              value={question}
            ></textarea>
          </div>

          <div className="form__answers">
            <label htmlFor="answersTextArea">Answers</label>
            <textarea
              className="form__answers__descriptor form-control"
              id="answersTextArea"
              onChange={(e) => {
                let questionArray = e.target.value;
                setAnswers(questionArray);
              }}
              value={answers}
            ></textarea>
          </div>

          <div className="form__answer">
            <label htmlFor="answerTextArea">Correct Answer</label>
            <textarea
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              className="form__answer__descriptor form-control"
              id="answerTextArea"
              value={answer}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-danger from__submit--btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddQuestionForm;
