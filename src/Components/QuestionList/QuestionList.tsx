import React, { useContext, useState } from "react";
import "./QuestionListS.scss";
import { QuestionFilters } from "./QuestionFilter/QuestionFilters";
import { QuestionCards } from "./QuestionCards/QuestionCards";
import { filterQuestions } from "../Utils/Utils";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Loading } from "../Loading/Loading";
import { FilterSetting, filterSettingsDefault } from "../../Apis/types";
import { Badge, Button, Card } from "react-bootstrap";
import { ProgressBars } from "./ProgressBars/ProgressBars";
import { QuestionSort } from "./QuestionSort/QuestionSort";

export const QuestionList = () => {
    const { questions } = useContext(MyQuestionContext);
    const [sort, setSort] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<FilterSetting>(
        filterSettingsDefault
    );
    const currentQuestions = filterQuestions(questions, filterOptions);

    if (questions.length === 0) return <Loading />;

    return (
        <div className="QuestionList">
            <h1>
                <Badge pill bg="secondary">
                    Question List
                </Badge>
            </h1>
            <Card>
                <Card.Header>
                    <AddQuestionForm />

                    <QuestionFilters
                        setFilterSettings={setFilterOptions}
                        filterSettings={filterOptions}
                        sort={sort}
                        setSort={setSort}
                    />
                    <ProgressBars title={""} />
                </Card.Header>

                <Card.Body>
                    {sort && <QuestionSort questions={currentQuestions} />}
                    {!sort && (
                        <QuestionCards
                            currentQuestions={currentQuestions}
                            showDelete={false}
                        />
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};
