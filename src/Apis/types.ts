// move paths here
export interface dummy {}

export enum API {
    questions = "/questions",
    user = "/user",
    addQuestion = "/addToDataBase",
}

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
