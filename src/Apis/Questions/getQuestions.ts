import { API, Question } from "../types";
import { get } from "../utils";

export const getQuestions = (): Promise<Question[]> => {
    return get(API.questions);
};
