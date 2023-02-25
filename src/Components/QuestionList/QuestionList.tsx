import React, { useContext, useState } from "react";
import "./QuestionListS.scss";
import { filterQuestions } from "../Utils/Utils";

import { Loading } from "../Loading/Loading";
import { FilterSetting, filterSettingsDefault } from "../../Apis/types";
import { OffCanvas } from "./OffCanvas/OffCanvas";
import { QuestionCards } from "./QuestionViewTypes/QuestionCards/QuestionCards";
import { SmallCardList } from "./QuestionViewTypes/SmallCardList/SmallCardList";
import { QuestionCardsWithImage } from "./QuestionViewTypes/QuestionCardWithImage/QuestionCardsWithImage";
import { MyQuestionContext } from "../Context/QuestionContext";

export const QuestionList = () => {
    const { questions } = useContext(MyQuestionContext);
    const [filterOptions, setFilterOptions] = useState<FilterSetting>(
        filterSettingsDefault
    );
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const [viewOptions, setViewOptions] = useState<number>(1);
    let currentQuestion = filterQuestions({ questions, filterOptions });

    const currentView = (viewOptions: number) => {
        switch (viewOptions) {
            case 1:
                return (
                    <QuestionCards
                        currentQuestions={currentQuestion}
                        showDelete={showDelete}
                    />
                );

            case 2:
                return (
                    <SmallCardList
                        currentQuestions={currentQuestion}
                        showDelete={showDelete}
                    />
                );
            case 3:
                return (
                    <QuestionCardsWithImage
                        currentQuestions={currentQuestion}
                        showDelete={showDelete}
                    />
                );
        }
    };

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
                setViewOptions={setViewOptions}
            />

            {currentView(viewOptions)}
        </div>
    );
};
