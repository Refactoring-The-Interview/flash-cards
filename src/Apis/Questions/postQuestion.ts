import { Question } from "../types";
import { storage } from "./storage";

export const postQuestion = (question: Question): Promise<Question[]> => {
    return new Promise((resolve) =>
        setTimeout(() => resolve(storage.addQuestion(question)))
    );
};
