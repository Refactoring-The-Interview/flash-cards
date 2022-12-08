import React, { useState } from "react";
import { Question } from "../store/types";
import "./AddQuestionFormS.scss";
import { useLocalStorage } from "../LocalStorage/LocalStorage";

const AddQuestionForm = (props: any) => {
  const [addQuestion, setAddQuestion] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState("");
  const [test, setNewQuestionBank] = useLocalStorage("questionBank", []);
  const [newQuestion, setNewQuestion] = useState<Question>({
    difficulty: "",
    question: "",
    answer: "",
    answers: [],
  });

  const textAreas = ["Difficulty", "Question", "Answers", "Answer"];

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
            setNewQuestion({
              difficulty: difficulty,
              question: question,
              answer: answer,
              answers: answers.split(" "),
            });
            test.push(newQuestion);
            setNewQuestionBank(test);
          }}
        >
          {textAreas.map((area: string, index: number) => {
            return (
              <div className={area} key={index}>
                <label htmlFor={`${area}TextArea`}>{area}</label>
                <textarea
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                  className="form-control"
                  id={`${area}TextArea`}
                  value={question}
                ></textarea>
              </div>
            );
          })}

          <button type="submit" className="btn btn-danger from__submit--btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddQuestionForm;
