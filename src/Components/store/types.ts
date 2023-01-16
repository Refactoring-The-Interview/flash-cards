export interface Question {
    difficulty: string;
    question: string;
    answer: string;
    answers: string[];
    tags: string[];
}

export interface FilterSetting {
    type: string;
    name: string;
    hideCorrect: boolean;
}
