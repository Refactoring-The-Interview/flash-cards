import { Question } from "../../Apis/types";

interface Props {
    questions: Question[];
}

export const ShuffleArray = ({ questions }: Props) => {
    let shuffledQuestions = questions;

    for (let i = 0; i < shuffledQuestions.length; i += 1) {
        let randomIndexOne = Math.floor(
            Math.random() * shuffledQuestions.length
        );
        let randomIndexTwo = Math.floor(
            Math.random() * shuffledQuestions.length
        );

        let a = shuffledQuestions[randomIndexOne];
        let b = shuffledQuestions[i];
        shuffledQuestions[i] = a;
        shuffledQuestions[randomIndexOne] = b;

        let c = shuffledQuestions[randomIndexTwo];
        let d = shuffledQuestions[i];
        shuffledQuestions[i] = c;
        shuffledQuestions[randomIndexTwo] = d;
    }

    return shuffledQuestions;
};
