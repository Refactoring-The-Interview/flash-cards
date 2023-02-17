import { Question } from "../../Apis/types";

export const sortAlphabetically = (questions: Question[]) => {
    const sorted = questions.sort((a, b) => {
        if (a.question > b.question) return -1;
        if (a.question < b.question) return 1;
        return 0;
    });

    return sorted;
};

export const alternateSort = (questions: Question[]) => {
    return questions;
    let result = questions;
    let j = result.length - 1;
    let i = 0;

    while (j !== i) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
        j -= 1;
        i += 1;
    }

    return result;
};
