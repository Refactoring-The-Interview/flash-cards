import { API, Question } from "../types";
import { deleteItem } from "../utils";

export const deleteQuestion = (question: Question): Promise<Question[]> => {
    // console.log(question, "quesitons");
    // works here
    return deleteItem(API.deleteItem, question);
};
