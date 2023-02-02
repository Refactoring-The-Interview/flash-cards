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
    type: Tags | undefined;
    name: string;
    hideCorrect: boolean;
    difficulty: Difficulty;
}

export interface userInfo {
    email: string;
    password: string;
    img?: any;
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
    profile = "/profile",
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

export const filterSettingsDefault: FilterSetting = {
    type: undefined,
    name: "",
    hideCorrect: false,
    difficulty: Difficulty.none,
};
