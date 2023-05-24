import { API, Question } from "../types";
import { get } from "../utils";
import { storage } from "./storage";

export const getQuestions = (): Promise<Question[]> => {
    return new Promise((resolve) =>
        setTimeout(() => resolve(storage.getQuestions()))
    );
};
