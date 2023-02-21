/*

Create a search field that when you type into it we display the questions that have that substring in the question.

ex -

A = "This is a question"
B = "Not a question"
C = "this is garbage"
D = "OMGICANTBELIEVETHISISAQUESTION"

Search => "This"

Acceptable it will show A.

Ideally it will show A, C, and D


17min in with full functionally and base code no style.
12 min styling, got suck with the hight trying to use flex
*/

import { useContext, useEffect, useState } from "react";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { SearchForm } from "./SearchForm";
import { QuestionList } from "./QuestionList";
import { Question } from "../../Apis/types";
import { FilterBySearchTerm } from "./utils";
import "./QuestionListSearchS.scss";

export const QuestionListSearch = () => {
    const { questions } = useContext(MyQuestionContext);
    const [filteredQuestions, setFilteredQuestion] =
        useState<Question[]>(questions);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        setFilteredQuestion(FilterBySearchTerm({ questions, searchTerm }));
    }, [questions, searchTerm]);

    return (
        <div className="QuestionListSearch">
            <SearchForm value={searchTerm} setValue={setSearchTerm} />
            <QuestionList filteredQuestions={filteredQuestions} />
        </div>
    );
};
