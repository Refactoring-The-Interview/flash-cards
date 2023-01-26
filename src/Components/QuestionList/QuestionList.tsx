import React, { useContext, useEffect, useState } from "react";
import "./QuestionListS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question, FilterSetting, Difficulty } from "../store/types";
import { QuestionFilters } from "./QuestionFilter/QuestionFilters";
import { QuestionCards } from "./QuestionCards/QuestionCards";
import {
    isQuestionDifficulty,
    isQuestionHideCorrect,
    isQuestionType,
    isQuestionName,
} from "../Utils/Utils";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";

export const QuestionList = () => {
    // const [question] = useLocalStorage(StorageKey.questionBank, []);
    const { questions } = useContext(MyQuestionContext);

    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );

    const [filterSettings, setFilterSettings] = useState<FilterSetting>({
        type: "Js",
        name: "",
        hideCorrect: false,
        difficulty: Difficulty.none,
    });

    useEffect(() => {
        const { name, type, hideCorrect, difficulty } = filterSettings;
        let filteredQuestions = questions;

        filteredQuestions = filteredQuestions.filter(
            (question: Question, index: number) => {
                return (
                    isQuestionType(question, type) &&
                    isQuestionName(question, name) &&
                    isQuestionDifficulty(question, difficulty as Difficulty) &&
                    isQuestionHideCorrect(question, !!hideCorrect)
                );
            }
        );
        setFilteredQuestionBank(filteredQuestions);
    }, [filterSettings, questions, setFilteredQuestionBank]);

    let currentquestions =
        filteredQuestionBank?.length < 0 ? questions : filteredQuestionBank;

    return (
        <div className="QuestionList">
            <AddQuestionForm />
            <div className="filter-container">
                <QuestionFilters filterSettings={setFilterSettings} />
            </div>

            <div className="list-container">
                <QuestionCards currentQuestions={currentquestions} />
            </div>
        </div>
    );
};
