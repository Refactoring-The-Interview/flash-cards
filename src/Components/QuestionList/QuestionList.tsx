import React, { useEffect, useState } from "react";
import "./QuestionListS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question, FilterSetting } from "../store/types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./QuestionListS.scss";
import JsImage from "../../Assets/1627664298-javascript.jpg";
import { QuestionFilters } from "./QuestionFilter/QuestionFilters";

import Badge from "react-bootstrap/Badge";

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
        let filter = questions;

        if (type) {
            filter = filter.filter((question: Question, index: number) => {
                return question.tags.includes(type);
            });
        }

        if (name) {
            filter = filter.filter((question: Question, index: number) => {
                return question.answer
                    .toLowerCase()
                    .includes(name.toLocaleLowerCase());
            });
        }

        if (difficulty) {
            filter = filter.filter((question: Question, index: number) => {
                return question.difficulty.includes(difficulty);
            });
        }

        if (!!hideCorrect) {
            filter = filter.filter((question: Question, index: number) => {
                return question.correct === hideCorrect;
            });
        }

        console.log(filter);
        setFilteredQuestionBank(filter);
    }, [filterSettings]);

    let currentQuestions =
        filteredQuestionBank?.length < 0 ? questions : filteredQuestionBank;

    return (
        <div className="QuestionList">
            <div className="filter-container">
                <QuestionFilters filterSettings={setFilterSettings} />
            </div>

            <div className="list">
                {currentQuestions.map((q: any, index: number) => {
                    return (
                        <Card className="card" key={index}>
                            <Card.Img
                                variant="top"
                                src={JsImage}
                                className="img"
                            />
                            <Card.Body>
                                <Card.Title className="title">
                                    {q.answer}
                                </Card.Title>
                                <Card.Text className="text">
                                    {q.question}
                                </Card.Text>
                                <Card.Subtitle className="tags">
                                    Tags:
                                    {q.tags.map(
                                        (tag: string, index: number) => {
                                            return (
                                                <h6>
                                                    <Badge
                                                        bg="warning"
                                                        text="dark"
                                                        className="tag"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                </h6>
                                            );
                                        }
                                    )}
                                </Card.Subtitle>
                                <Button
                                    variant="primary"
                                    onClick={(e) => {
                                        setCurrentQuestion(questions[index]);
                                        setShowQuestionList(false);
                                    }}
                                >
                                    Select Question
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
