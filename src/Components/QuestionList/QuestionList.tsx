import React, { useEffect, useState } from "react";
import "./QuestionListS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question, FilterSetting } from "../store/types";
import { QuestionFilters } from "./QuestionFilter/QuestionFilters";
import { QuestionCard } from "./QuestionCard/QuestionCard";

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
        difficulty: "null",
    });

    useEffect(() => {
        const { name, type, hideCorrect, difficulty } = filterSettings;
        let filteredQuestions = questions;

        if (type) {
            filteredQuestions = filteredQuestions.filter(
                (question: Question, index: number) => {
                    return question.tags.includes(type);
                }
            );
        }

        if (name) {
            filteredQuestions = filteredQuestions.filter(
                (question: Question, index: number) => {
                    return question.answer
                        .toLowerCase()
                        .includes(name.toLocaleLowerCase());
                }
            );
        }

        if (difficulty) {
            filteredQuestions = filteredQuestions.filter(
                (question: Question, index: number) => {
                    return question.difficulty.includes(difficulty);
                }
            );
        }

        if (!!hideCorrect) {
            filteredQuestions = filteredQuestions.filter(
                (question: Question, index: number) => {
                    return question.correct === hideCorrect;
                }
            );
        }

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
