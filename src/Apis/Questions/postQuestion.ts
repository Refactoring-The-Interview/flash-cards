import { API, Question } from "../../Components/store/types";
import { post } from "../utils";

export const postQuestion = (question: Question): Promise<Question[]> => {
    return post(API.addQuestion, {
        question,
    });
};
