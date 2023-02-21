//4:05

import { useContext, useEffect, useState } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { sortReverseOrderAndReverseString } from "./utils";
import { Question } from "../../Apis/types";

export const DisplayReverseQuestions = () => {
    const { questions } = useContext(MyQuestionContext);

    const [newQuestionsSet, setNewQuestionsSet] = useState<any>(
        sortReverseOrderAndReverseString({ questions })
    );

    useEffect(() => {
        setNewQuestionsSet(sortReverseOrderAndReverseString({ questions }));
    }, [questions]);

    return (
        <>
            {newQuestionsSet.map((currentQuestion: Question) => {
                const { question } = currentQuestion;
                return <div>{question}</div>;
            })}
        </>
    );
};
