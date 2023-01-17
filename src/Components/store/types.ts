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
    difficulty: string;
}

export enum Difficulty {
    easy = "easy",
    medium = "medium",
    hard = "hard",
}
