/*

Display list of questions. Alternate ordering between descending and ascending alphabetical order. Displaying the question name is enough.
ex - [A, B, C, D, E, F, G, H]
=> [A, H, B, G, C, F, D, E]

start: 4:30
end:5:00

*/

import { useContext, useEffect, useState } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { alternateSort, sortAlphabetically } from "./utils";
import { QuestionList } from "./QuestionList";
import { Question } from "../../Apis/types";

export const SelfInterviewThree = () => {
    const { questions } = useContext(MyQuestionContext);
    let sortedArrQuestions = alternateSort(sortAlphabetically(questions));

    console.log(sortedArrQuestions);

    return (
        <div>
            <h2>Question List</h2>
            <QuestionList questions={sortedArrQuestions} />
        </div>
    );
};
