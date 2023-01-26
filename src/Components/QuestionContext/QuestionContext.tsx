import { createContext, useContext } from "react";
import { Question } from "../store/types";

export interface QuestionContext {
    questions: Question[];
    setQuestions(newQuestions: Question[]): void;
}

export const MyQuestionContext = createContext<QuestionContext>({
    questions: [],
    setQuestions: () => {},
});
