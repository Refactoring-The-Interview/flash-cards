import { useContext, useEffect, useState } from "react";
import { MyQuestionContext } from "../Context/QuestionContext";
import { reverseQuestions } from "./utils";
import { QuestionItem } from "./QuesitonItem";
import { Question } from "../../Apis/types";
import "./ReverseStringS.scss";

export const ReverseString = () => {
    const { questions } = useContext(MyQuestionContext);
    const [reversedQuestions, setReversedQuestions] =
        useState<Question[]>(questions);

    useEffect(() => {
        setReversedQuestions(reverseQuestions(questions));
    }, [questions]);

    return (
        <div className="ReverseString">
            {reversedQuestions.map((currentQuestion) => {
                return <QuestionItem currentQuestion={currentQuestion} />;
            })}
        </div>
    );
};
