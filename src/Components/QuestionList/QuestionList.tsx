import React, { useContext, useState } from "react";
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
import { Button } from "react-bootstrap";
import { ProgressBars } from "./ProgressBars/ProgressBars";

export const QuestionList = () => {
    const { questions } = useContext(MyQuestionContext);
    console.log(questions);
    const [filterSettings, setFilterSettings] = useState<FilterSetting>(
        filterSettingsDefault
    );
    const [showDelete, setShowDelete] = useState<boolean>(false);

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
            <div className="QuestionList-buttons">
                <AddQuestionForm />
                <Button
                    onClick={() => {
                        setShowDelete(!showDelete);
                    }}
                >
                    Edit Questions
                </Button>
            </div>
            <div className="filter-container">
                <QuestionFilters
                    filterSettings={filterSettings}
                    setFilterSettings={setFilterSettings}
                />
            </div>

            <div>
                <ProgressBars />

                <QuestionCards
                    currentQuestions={currentQuestions}
                    showDelete={showDelete}
                />
            </div>
        </div>
    );
};
