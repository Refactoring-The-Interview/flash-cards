import { Question } from "../../Apis/types";

export const reverseString = (string: string) => {
    let result = "";
    for (let i = string.length - 1; i >= 0; i -= 1) {
        result += string[i];
    }
    return result;
};

export const reverseQuestions = (questions: Question[]) => {
    return questions.map((question) => {
        question.question = question.question
            .split(" ")
            .map((word) => {
                return reverseString(word);
            })
            .join(" ");
        return question;
    });
};
