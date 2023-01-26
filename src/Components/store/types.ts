export interface Question {
    difficulty: Difficulty;
    question: string;
    answer: string;
    answers: string[];
    tags: string[];
    correct: boolean;
    id: string;
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

export enum Tags {
    js = "Js",
    obj = "object",
    array = "array",
}

export enum Paths {
    question = "/question/:questionId",
    questionList = "/question-list",
    login = "/login",
    home = "/home",
    contact = "/contact",
}

export enum API {
    //  todo create question post for specific questions
    question = "/question",
    user = "/user",
    addQuestion = "/addToDataBase",
}

export const pathGenerator = {
    [Paths.question]: (questionId: string) => `/question/${questionId}`,
};
