//4:05

import { useContext } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { sortReverseOrderAndReverseString } from "./utils";

export const DisplayReverseQuestions = () => {
    const { questions } = useContext(MyQuestionContext);
    const reversedQuestion = sortReverseOrderAndReverseString({ questions });
    console.log(reversedQuestion, "question in main");
    return <div></div>;
};
