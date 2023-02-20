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

export const ReverseAlphabeticalQuestion = () => {
    const { questions } = useContext(MyQuestionContext);

    const alphabeticalSorted = EveryOther({ questions });

    return (
        <div className="ReverseAlphabeticalQuestion">
            <h3>Question List</h3>
            <div className="Question">
                {alphabeticalSorted.map((question) => {
                    return <QuestionItem currentQuestion={question} />;
                })}
            </div>
        </div>
    );
};
