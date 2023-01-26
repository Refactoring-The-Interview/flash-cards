import { createContext } from "react";
import { Question } from "../store/types";

interface QuestionContext {
    questions: Question[];
}

export const MyQuestionContext = createContext<QuestionContext>({
    questions: [],
});
