import { useContext } from "react";
import { MyQuestionContext } from "../Context/QuestionContext";

export const useRandomQuestion = () => {
    const { questions } = useContext(MyQuestionContext);

    let randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    return question;
};
