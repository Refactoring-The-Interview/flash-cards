import { Question } from "../../Apis/types";

export const sortMethod = (questions: Question[], switchNumber: number) => {
    let result = questions.sort((a: any, b: any) => {
        if (a.question < b.question) return -1;
        if (a.question > b.question) return 1;
        return 0;
    });

    for (let i = 0; i < result.length; i += switchNumber) {
        let a = result[i];
        let b = result[i + 1];

        result[i] = b;
        result[i + 1] = a;
    }

    return result;
};
