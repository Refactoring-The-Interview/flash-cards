import { Difficulty, FilterSetting, Question, Tags } from "../../Apis/types";

export const isQuestionType = (question: Question, type: Tags | undefined) => {
    return !type || question.tags.includes(type);
};
export const isQuestionName = (question: Question, name: string) => {
    return question.answer.toLowerCase().includes(name.toLocaleLowerCase());
};
export const isQuestionDifficulty = (
    question: Question,
    difficulty: Difficulty
) => {
    return question.difficulty.includes(difficulty);
};
export const isQuestionHideCorrect = (
    question: Question,
    hideCorrect: boolean
) => {
    if (hideCorrect) {
        return question.correct !== hideCorrect;
    } else {
        return true;
    }
};

interface Props {
    questions: Question[];
    filterOptions: FilterSetting;
}

export const filterQuestions = ({ questions, filterOptions }: Props) => {
    const { name, type, hideCorrect, difficulty } = filterOptions;

    return questions.filter((question: Question, index: number) => {
        return (
            isQuestionType(question, type) &&
            isQuestionName(question, name) &&
            isQuestionDifficulty(question, difficulty) &&
            !!isQuestionHideCorrect(question, hideCorrect)
        );
    });
};

interface SortKey {
    easy: number;
    medium: number;
    hard: number;
    "": number;
}

interface SortProps {
    questions: Question[];
    sortKey: SortKey;
}

export const SortQuestions = ({ questions, sortKey }: SortProps) => {
    return questions.sort((a, b) => {
        return sortKey[a.difficulty] - sortKey[b.difficulty];
    });
};
