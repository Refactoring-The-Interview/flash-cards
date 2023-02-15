import { ReactNode, createContext } from "react";
import { Question } from "../../Apis/types";
import { useQuestions } from "./useQuestions";

export interface QuestionContext {
    questions: Question[];
    setQuestions(newQuestions: Question[]): void;
    addQuestion(question: Question): void;
    deleteQuestion(questionId: string): void;
    updateQuestion(questions: Question[]): void;
}

export const MyQuestionContext = createContext<QuestionContext>({
    questions: [],
    setQuestions: () => {},
    addQuestion: () => {},
    deleteQuestion: () => {},
    updateQuestion: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyQuestionProvider = ({ children }: Props) => {
    const {
        questions,
        setQuestions,
        addQuestion,
        deleteQuestion,
        updateQuestion,
    } = useQuestions();

    return (
        <MyQuestionContext.Provider
            value={{
                questions,
                setQuestions,
                addQuestion,
                deleteQuestion,
                updateQuestion,
            }}
        >
            {children}
        </MyQuestionContext.Provider>
    );
};
