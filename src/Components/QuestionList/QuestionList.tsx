import React, { useContext, useState } from "react";
import "./QuestionListS.scss";
import { QuestionFilters } from "./QuestionFilter/QuestionFilters";
import { QuestionCards } from "./QuestionCards/QuestionCards";
import {
    isQuestionDifficulty,
    isQuestionHideCorrect,
    isQuestionType,
    isQuestionName,
    filterQuestions,
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
import { EditOptions } from "./EditOptions/EditOptions";

export const QuestionList = () => {
    const { questions } = useContext(MyQuestionContext);
    const [filterSettings, setFilterSettings] = useState<FilterSetting>(
        filterSettingsDefault
    );
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const currentQuestions = filterQuestions(questions, filterSettings);

    if (questions.length === 0) {
        return (
            <h1>
                <Loading />
            </h1>
        );
    }

    return (
        <div className="QuestionList">
            <EditOptions
                filterSettings={filterSettings}
                setFilterSettings={setFilterSettings}
                setShowDelete={setShowDelete}
                showDelete={showDelete}
            />
            <QuestionCards
                currentQuestions={currentQuestions}
                showDelete={showDelete}
            />
        </div>
    );
};
