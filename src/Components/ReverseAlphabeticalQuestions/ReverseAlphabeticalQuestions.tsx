/*

Question 1:

Display all questions in reverse alphabetical order based on the text of the question itself, however every other question we want to push to the end of our list. I want to see the question, answers, and highlight the correct answer for each.

ex -

[A, B, C, D] => [D, B, C, A]
[D, C, B, A]
[D, B, A, C]
[D, B ,C ,A]

START: 12:00;
functional: 12: 30;
END: 12:45;

*/

import { useContext } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { EveryOther } from "./utils";
import { QuestionItem } from "./QuesitonItem";
import "./ReverseAlphabeticalQuestionS.scss";
import { Question } from "../../Apis/types";
const questions = [
    {
        difficulty: "medium",
        question:
            "What method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
        answer: "A",
        answers: ["Array.filter()", "Array.reduce()", "Array.forEach()"],
        tags: ["array"],
        correct: false,
        id: "7",
    },
    {
        difficulty: "medium",
        question:
            "What method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
        answer: "B",
        answers: ["Array.filter()", "Array.reduce()", "Array.forEach()"],
        tags: ["array"],
        correct: false,
        id: "8",
    },
    {
        difficulty: "medium",
        question:
            "What method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
        answer: "C",
        answers: ["Array.filter()", "Array.reduce()", "Array.forEach()"],
        tags: ["array"],
        correct: false,
        id: "9",
    },
    {
        difficulty: "medium",
        question:
            "What method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
        answer: "D",
        answers: ["Array.filter()", "Array.reduce()", "Array.forEach()"],
        tags: ["array"],
        correct: false,
        id: "10",
    },
] as Question[];

export const ReverseAlphabeticalQuestion = () => {
    // const { questions } = useContext(MyQuestionContext);

    const alphabeticalSorted = EveryOther({ questions });

    const test = questions.sort((a: Question, b: Question) => {
        if (a.answer > b.answer) return -1;
        if (a.answer < b.answer) return 1;
        return 0;
    });

    return (
        <div className="ReverseAlphabeticalQuestion">
            <h3>Question List</h3>
            <div className="Question">
                {alphabeticalSorted.map((question) => {
                    return <QuestionItem currentQuestion={question} />;
                })}
                <h1>split</h1>
                {test.map((question) => {
                    return <QuestionItem currentQuestion={question} />;
                })}
            </div>
        </div>
    );
};
