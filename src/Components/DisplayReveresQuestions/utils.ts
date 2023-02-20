import { workerData } from "worker_threads";
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

    reversedOrder.forEach(
        ({ question }) => (question = reverseWords(question))
    );

    // reversedOrder.map(({ question }) => {
    //     let sentence = question.split(" ");
    //     sentence
    //         .map((word) => {
    //             word = word.split("").reverse().join("");
    //             return word;
    //         })
    //         .join(" ");
    //     console.log(sentence, "sentence");
    //     return sentence;
    // });

    // reversedOrder.forEach(({ question }) => {
    //     let words = question.split(" ");
    //     let sentence;
    //     words.forEach((word) => {
    //         return word.split("").reverse().join("");
    //     });

    //     console.log(sentence);
    //     question = words.join(" ");
    // });

    // reversedOrder.forEach(({ question }) => {
    //     question.split(" ").forEach((word) => {
    //         word.split("").reverse().join("");
    //     });
    // });

    console.log(reversedOrder, "reversedOrder");

    return reversedOrder;
};
