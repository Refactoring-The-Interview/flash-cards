import React, { useState } from "react";
import "./ArrayMethodsS.scss";
import { Question } from "../store/types";

interface Props {
  cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props) => {
  const correctCss = "btn btn-success";
  const incorrectCss = "btn btn-danger";
  const defaultCss = "btn btn-outline-info";
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const { question, answer, answers } = cardQuestion;
  const isCorrect = selectedAnswer === answer;
  const selectedCss = isCorrect ? correctCss : incorrectCss;

  return (
    <div className="ArrayMethods">
      <div className="description">{question}</div>

      <ul className="list">
        {answers.map((item: string, index: number) => {
          return (
            <button
              type="button"
              className={`btn-item ${
                selectedAnswer ? selectedCss : defaultCss
              }`}
              key={index}
              onClick={(e) => {
                setSelectedAnswer(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </ul>
    </div>
  );
};
