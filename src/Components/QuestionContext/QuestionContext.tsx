import { createContext } from "react";
import { Question } from "../store/types";

interface QuestionContext {
    questions: Question[];
    setQuestions(newQuestions: Question[]): void;
}

export const MyQuestionContext = createContext<QuestionContext>({
    questions: [],
    setQuestions: (newQuestions: Question[]) => {},
});
