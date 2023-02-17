/*

Question 1:

Display all questions in alphabetical order based on the text of the question itself, however every 3rd question we want to push to the end of our list. I want to see the question, answers, and highlight the correct answer for each.

ex -

1. A boy
2. B boy
3. C boy
4. D boy

-------

A, B, D, C

// googled sort for alphabetical 1:13pm
// 1:20 sort done and swapping
1: 31 done with all functioning
1: 36 basic styling, pushing
1: 37 pushing pr

start: 1:00
end: 1:45 max
*/

import { useContext } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { sortMethod } from "./utils";
import { Question } from "../../Apis/types";
import { QuestionItem } from "./QuesitonItem";
import "./SelfInterviewOneS.scss";

export const SelfInterviewOne = () => {
    const { questions } = useContext(MyQuestionContext);
    const sortedQuestions = sortMethod(questions, 3);

    return (
        <div className="SelfInterviewOne">
            {sortedQuestions.map((question: Question) => {
                return <QuestionItem currentQuestion={question} />;
            })}
        </div>
    );
};
