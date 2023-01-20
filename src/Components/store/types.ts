export interface Question {
    difficulty: Difficulty;
    question: string;
    answer: string;
    answers: string[];
    tags: string[];
    correct: boolean;
}

export interface FilterSetting {
    type: string;
    name: string;
    hideCorrect: boolean;
    difficulty?: Difficulty;
}

export enum Difficulty {
    easy = "easy",
    medium = "medium",
    hard = "hard",
    none = "",
}

export enum Paths {
    question = "/question/:questionId",
    questionList = "/question-list/:lastQuestionId",
    login = "/login",
    home = "/home",
    contact = "/contact",
}

export const pathGenerator = {
    [Paths.question]: (questionId: string) => `/question/${questionId}`,
    [Paths.questionList]: (lastQuestionId: string) =>
        `/question-list/${lastQuestionId}`,
};
