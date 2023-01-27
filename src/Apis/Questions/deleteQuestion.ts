import { API, Question } from "../types";
import { deleteItem } from "../utils";

export const deleteQuestion = (question: Question): Promise<Question[]> => {
    return deleteItem(API.deleteItem, question);
};
