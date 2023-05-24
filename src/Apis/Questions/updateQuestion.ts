import { Question } from "../types";
import { storage } from "./storage";

export const updateQuestion = (questions: Question[]): Promise<Question[]> => {
    return new Promise((resolve) =>
        setTimeout(() => resolve(storage.updateQuestions(questions)))
    );
};
