import { Question } from "../../Apis/types";

interface Props {
    questions: Question[];
}

function reverseWords(str: string) {
    const allWords = str.split(" ");
    return allWords
        .map((item: string) => item.split("").reverse().join(""))
        .join(" ");
}

export const sortReverseOrderAndReverseString = ({ questions }: Props) => {
    let reversedOrder = questions.sort((a, b) => {
        if (a.question > b.question) return -1;
        if (a.question > b.question) return 1;
        return 0;
    });
    let newOrder = reversedOrder;

    let newStrings = newOrder.map(({ question }) => reverseWords(question));

    newStrings.forEach((newQuestion, index) => {
        newOrder[index].question = newQuestion;
    });

    return newOrder;
};
