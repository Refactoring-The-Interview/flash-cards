import React, { useEffect, useState } from "react";
import "./QuestionListS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question, FilterSetting, Difficulty } from "../store/types";
import { QuestionFilters } from "./QuestionFilter/QuestionFilters";
import { QuestionCard } from "./QuestionCard/QuestionCard";
import {
    isQuestionDifficulty,
    isQuestionHideCorrect,
    isQuestionType,
    isQuestionName,
} from "../Utils/Utils";

export const QuestionList = ({ setShowQuestionList }: any) => {
    const [questions, setQuestions] = useLocalStorage(
        StorageKey.questionBank,
        []
    );
    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );
    const [_, setCurrentQuestion] = useLocalStorage(
        StorageKey.currentQuestion,
        {}
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
    }, [filterSettings]);

    let currentQuestions =
        filteredQuestionBank?.length < 0 ? questions : filteredQuestionBank;

    return (
        <div className="QuestionList">
            <div className="filter-container">
                <QuestionFilters filterSettings={setFilterSettings} />
            </div>

            <div className="list-container">
                <QuestionCard
                    currentQuestions={currentQuestions}
                    setCurrentQuestion={setCurrentQuestion}
                    setShowQuestionList={setShowQuestionList}
                />
            </div>
        </div>
    );
};
