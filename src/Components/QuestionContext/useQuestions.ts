import { useEffect, useState } from "react";
import { getQuestions } from "../../Apis/Questions/getQuestions";
import { Question } from "../store/types";
import { QuestionContext } from "./QuestionContext";
import { postQuestion } from "../../Apis/Questions/postQuestion";

export const useQuestions = (): QuestionContext => {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        getQuestions().then((data) => setQuestions(data));
    }, []);

    const addQuestion = async (question: Question) => {
        return await postQuestion(question).then((data) => setQuestions(data));
    };

    return { questions, setQuestions, addQuestion };
};
