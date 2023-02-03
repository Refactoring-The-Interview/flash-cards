import React, { useContext, useEffect, useState } from "react";
import "./QuestionListS.scss";
import { QuestionFilters } from "./QuestionFilter/QuestionFilters";
import { QuestionCards } from "./QuestionCards/QuestionCards";
import { filterQuestions } from "../Utils/Utils";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Loading } from "../Loading/Loading";
import {
    FilterSetting,
    Question,
    filterSettingsDefault,
} from "../../Apis/types";
import { Button } from "react-bootstrap";
import { ProgressBars } from "./ProgressBars/ProgressBars";
import { OffCanvas } from "./OffCanvas/OffCanvas";

export const QuestionList = () => {
    const { questions } = useContext(MyQuestionContext);
    const [filterOptions, setFilterOptions] = useState<FilterSetting>(
        filterSettingsDefault
    );

    const [showDelete, setShowDelete] = useState<boolean>(false);

    const currentQuestion = filterQuestions({ questions, filterOptions });

    if (questions.length === 0) {
        return (
            <h1>
                <Loading />
            </h1>
        );
    }

    return (
        <div className="QuestionList">
            <OffCanvas
                setFilterSettings={setFilterOptions}
                filterSettings={filterOptions}
                showDelete={showDelete}
                setShowDelete={setShowDelete}
            />
            <QuestionCards
                currentQuestions={currentQuestion}
                showDelete={showDelete}
            />
        </div>
    );
};
