export interface Question {
    difficulty: Difficulty;
    question: string;
    answer: string;
    answers: string[];
    tags: Tags[];
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
    none = "none",
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
    questions = "/questions",
    user = "/user",
    addQuestion = "/addToDataBase",
    deleteItem = "/deleteItem",
}

export enum FetchMethods {
    post = "post",
    get = "get",
    delete = "delete",
}

export const pathGenerator = {
    [Paths.question]: (questionId: string) => `/question/${questionId}`,
};
