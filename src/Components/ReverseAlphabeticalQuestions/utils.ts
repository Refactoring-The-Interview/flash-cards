import { Question } from "../../Apis/types";

interface Props {
    questions: Question[];
}

export const EveryOther = ({ questions }: Props) => {
    let result = questions.sort((a: Question, b: Question) => {
        if (a.question > b.question) return -1;
        if (a.question < b.question) return 1;
        return 0;
    });

    let evens = result.filter((item, index) => {
        return index % 2 === 0;
    });
    let odds = result.filter((item, index) => {
        return index % 2 !== 0;
    });

    evens = evens.concat(odds);

    return evens;
};
