import React, { useContext, useEffect, useState } from "react";
import "./QuestionListS.scss";
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
import { Loading } from "../Loading/Loading";
import {
    Difficulty,
    FilterSetting,
    Question,
    Tags,
    filterSettingsDefault,
} from "../../Apis/types";

export const QuestionList = () => {
    const { questions, setQuestions } = useContext(MyQuestionContext);
    const [filterSettings, setFilterSettings] = useState<FilterSetting>(
        filterSettingsDefault
    );

    const { name, type, hideCorrect, difficulty } = filterSettings;

    const currentQuestions = questions.filter(
        (question: Question, index: number) => {
            return (
                isQuestionType(question, type as Tags) &&
                isQuestionName(question, name) &&
                isQuestionDifficulty(question, difficulty as Difficulty) &&
                isQuestionHideCorrect(question, !!hideCorrect)
            );
        }
    );

    if (questions.length === 0) {
        return (
            <h1>
                <Loading />
            </h1>
        );
    }

    return (
        <div className="QuestionList">
            <AddQuestionForm />
            <div className="filter-container">
                <QuestionFilters filterSettings={setFilterSettings} />
            </div>

            <QuestionCards currentQuestions={currentQuestions} />
        </div>
    );
};
