import { Question } from "../../Apis/types";

interface Props {
    questions: Question[];
}

const test = (string: string) => {
    let newString = string.split(" ");
    return newString
        .map((word) => {
            if (word.length % 2 !== 0) {
                word = word.split("").reverse().join("");
            }
            return word;
        })
        .join(" ");
};

export const reverseStringsOddLength = ({ questions }: Props) => {
    let reverseStringQuestionsOdd = questions;

    const result = reverseStringQuestionsOdd.map((question) => {
        return (question.question = test(question.question));
    });

    result.forEach((question, index) => {
        reverseStringQuestionsOdd[index].question = question;
    });

    return reverseStringQuestionsOdd;
};
