/*

Question 3:

Display all questions in a random order. Then chose a random answer from the question to display.

start 2:54
done: 3: 27
11 min spare did not know where to go form where i stopped felt good about it and did some styling so it looks presentable
*/

import { useContext } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { ShuffleArray } from "./utils";
import { QuestionItem } from "./QuestionItem";
import "./RandomQuestionListS.scss";

export const RandomQuestionList = () => {
    const { questions } = useContext(MyQuestionContext);
    const ShuffledQuestions = ShuffleArray({ questions });

    return (
        <div className="RandomQuestionList">
            {ShuffledQuestions.map((question) => {
                return <QuestionItem currentQuestion={question} />;
            })}
        </div>
    );
};
