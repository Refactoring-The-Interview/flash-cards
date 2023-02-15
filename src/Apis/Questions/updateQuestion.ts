import { post } from "../utils";
import { API, Question } from "../types";

export const updateQuestion = (questions: Question[]): Promise<Question[]> => {
    return post(API.UPDATEQUESTION, {
        questions,
    });
};
