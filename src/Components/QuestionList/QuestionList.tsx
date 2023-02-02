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
import { Button, Card, ListGroup } from "react-bootstrap";
import { ProgressBars } from "./ProgressBars/ProgressBars";
import { QuestionSort } from "./QuestionSort/QuestionSort";

export const QuestionList = () => {
    const { questions } = useContext(MyQuestionContext);
    const [editQuestionsList, setEditQuestionsList] = useState<boolean>(false);

    if (questions.length === 0) return <Loading />;

    return (
        <div className="QuestionList">
            <Card>
                <Card.Header>
                    <AddQuestionForm />

                    <QuestionFilters
                        setFilterSettings={function (
                            filterSettingObject: FilterSetting
                        ): void {
                            throw new Error("Function not implemented.");
                        }}
                        filterSettings={filterSettingsDefault}
                    />
                    <ProgressBars />
                </Card.Header>

                <Card.Body>
                    <QuestionSort questions={questions} />
                </Card.Body>
            </Card>
        </div>
    );
};
