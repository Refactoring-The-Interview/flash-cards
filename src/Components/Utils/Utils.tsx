import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Difficulty, Question } from "../store/types";

export const isQuestionType = (question: Question, type: string) => {
    return question.tags.includes(type);
};
export const isQuestionName = (question: Question, name: string) => {
    return question.answer.toLowerCase().includes(name.toLocaleLowerCase());
};
export const isQuestionDifficulty = (
    question: Question,
    difficulty: string
) => {
    return question.difficulty.includes(difficulty as Difficulty);
};
export const isQuestionHideCorrect = (
    question: Question,
    hideCorrect: boolean
) => {
    return question.correct === hideCorrect;
};

export const updateData = (
    updatedQuestion: Question,
    setQuestions: any,
    questions: Question[]
) => {
    questions.map((currentQuestion: Question, index: number) => {
        const { answer, question } = currentQuestion;

        if (
            answer === updatedQuestion.answer &&
            question === updatedQuestion.question
        ) {
            questions[index] = updatedQuestion;
            setQuestions(questions);
        }
    });
};