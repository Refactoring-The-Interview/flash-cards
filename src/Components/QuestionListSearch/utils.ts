import { Question } from "../../Apis/types";

interface Props {
    questions: Question[];
    searchTerm: string;
}

export const FilterBySearchTerm = ({ questions, searchTerm }: Props) => {
    let questionsFiltered = questions;

    return questionsFiltered.filter(({ question }) => {
        question = question.toLocaleUpperCase();
        searchTerm = searchTerm.toLocaleUpperCase();
        return question.includes(searchTerm);
    });
};
