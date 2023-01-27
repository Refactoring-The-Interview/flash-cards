import { post } from "../utils";
import { API, Question } from "../types";

export const postQuestion = (question: Question): Promise<Question[]> => {
    return post(API.addQuestion, {
        question,
    });
};
