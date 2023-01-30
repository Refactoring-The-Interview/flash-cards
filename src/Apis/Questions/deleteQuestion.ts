import { API, Question } from "../types";
import { deleteItem } from "../utils";

export const deleteQuestion = (questionId: string): Promise<Question[]> => {
    return deleteItem(API.deleteItem, { questionId });
};
