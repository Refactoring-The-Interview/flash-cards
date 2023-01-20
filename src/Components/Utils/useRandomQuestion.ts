import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";

export const useRandomQuestion = () => {
    const [questions] = useLocalStorage(StorageKey.questionBank, []);

    let randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    return question;
};
