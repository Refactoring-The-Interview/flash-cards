import React, { useContext, useEffect, useState } from "react";
import "./QuestionListS.scss";
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
    const { questions } = useContext(MyQuestionContext);
    const [filterSettings, setFilterSettings] = useState<FilterSetting>({
        type: "Js",
        name: "",
        hideCorrect: false,
        difficulty: Difficulty.none,
    });

    const [currentQuestions, setCurrentQuestions] =
        useState<Question[]>(questions);

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

        setCurrentQuestions(filteredQuestions);
    }, [filterSettings, questions]);

    return (
        <div className="QuestionList">
            <AddQuestionForm />
            <div className="filter-container">
                <QuestionFilters filterSettings={setFilterSettings} />
            </div>

            <MyQuestionContext.Consumer>
                {(questions) => {
                    return (
                        <QuestionCards currentQuestions={currentQuestions} />
                    );
                }}
            </MyQuestionContext.Consumer>
        </div>
    );
};
