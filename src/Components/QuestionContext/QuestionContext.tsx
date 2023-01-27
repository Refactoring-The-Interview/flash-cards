import { ReactNode, createContext } from "react";
import { Question } from "../store/types";
import { useQuestions } from "./useQuestions";

// move to types file
export interface QuestionContext {
    questions: Question[];
    setQuestions(newQuestions: Question[]): void;
    addQuestion(question: Question): void;
}

export const MyQuestionContext = createContext<QuestionContext>({
    questions: [],
    setQuestions: () => {},
    addQuestion: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyQuestionProvider = ({ children }: Props) => {
    const { questions, setQuestions, addQuestion } = useQuestions();

    return (
        <MyQuestionContext.Provider
            value={{ questions, setQuestions, addQuestion }}
        >
            {children}
        </MyQuestionContext.Provider>
    );
};
