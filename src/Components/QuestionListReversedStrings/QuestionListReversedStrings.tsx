import { useContext, useEffect, useState } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { reverseStringsOddLength } from "./utils";
import { Question } from "../../Apis/types";

export const QuestionListReversedStrings = () => {
    const { questions } = useContext(MyQuestionContext);
    const [newQuestions, setNewQuestions] = useState<Question[]>(questions);

    useEffect(() => {
        setNewQuestions(reverseStringsOddLength({ questions }));
    }, [questions]);

    return <>hello</>;
};
