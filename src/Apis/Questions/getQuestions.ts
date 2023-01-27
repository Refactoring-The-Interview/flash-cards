import { API, Question } from "../../Components/store/types";
import { get } from "../utils";

export const getQuestions = (): Promise<Question[]> => {
    return get(API.question);
};
