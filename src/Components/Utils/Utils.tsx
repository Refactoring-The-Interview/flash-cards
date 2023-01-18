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
