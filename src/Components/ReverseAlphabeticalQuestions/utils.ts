import { Question } from "../../Apis/types";

interface Props {
    questions: Question[];
}

export const SortArrayReverseAlphabetical = ({ questions }: Props) => {
    return questions.sort((a: Question, b: Question) => {
        if (a.answer > b.answer) return -1;
        if (a.answer < b.answer) return 1;
        return 0;
    });
};

export const EveryOther = ({ questions }: Props) => {
    let result = SortArrayReverseAlphabetical({ questions });

    for (let i = 1; i < result.length; i += 2) {
        result.push(result[i]);
        result.splice(i, 1);
    }
    return result;
};
