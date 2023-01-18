import React, { useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Button, Card } from "react-bootstrap";

const FlashCard = ({ QuestionList }: any) => {
    const [questions] = useLocalStorage(StorageKey.questionBank, []);
    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );
    const [currentQuestion, setCurrentQuestion] = useLocalStorage(
        StorageKey.currentQuestion,
        randomizer(questions)
    );

    return (
        <main>
            <Card>
                <Card.Header>
                    <div className="header-timer">
                        <Timer />
                    </div>

                    <div className="header-Question-list/filter">
                        <Button
                            type="button"
                            className="primary"
                            onClick={() => {
                                QuestionList(true);
                            }}
                        >
                            Question List
                        </Button>
                    </div>

                    <Button type="button" className="primary">
                        Submit
                    </Button>
                </Card.Header>

                <ArrayMethods cardQuestion={currentQuestion} />
                <Button
                    type="button"
                    className="primary"
                    onClick={(e) => {
                        setCurrentQuestion(
                            randomizer(
                                filteredQuestionBank?.length > 0 &&
                                    filteredQuestionBank
                                    ? filteredQuestionBank
                                    : questions
                            )
                        );
                    }}
                >
                    Next Question
                </Button>
                <AddQuestionForm />
            </Card>
        </main>
    );
};

export default FlashCard;
