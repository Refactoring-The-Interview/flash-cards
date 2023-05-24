import { API, Question } from "../types";
import { deleteItem } from "../utils";
import { storage } from "./storage";

export const deleteQuestion = (questionId: string): Promise<Question[]> => {
    return new Promise((resolve) =>
        setTimeout(() => resolve(storage.deleteQuestion(questionId)))
    );
};
