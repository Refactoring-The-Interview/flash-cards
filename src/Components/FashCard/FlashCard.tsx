import React, { useEffect, useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Button, Card, CardGroup } from "react-bootstrap";

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
                <div className="FlashCardHeader">
                    <Card.Header className="cardHeader">
                        <div className="FlashCardHeader-timer">
                            <Timer />
                        </div>

                        <CardGroup className="FlashCardHeader-buttons">
                            <Button
                                type="button"
                                variant="secondary"
                                className="FlashCardHeader-button"
                                onClick={() => {
                                    QuestionList(true);
                                }}
                            >
                                Question List
                            </Button>

                            <Button type="button" variant="secondary">
                                Submit
                            </Button>
                        </CardGroup>
                    </Card.Header>
                </div>

                <ArrayMethods cardQuestion={currentQuestion} />
                <div className="FlashCardFooter">
                    <Card.Footer className="cardFooter">
                        <AddQuestionForm />

                        <Button
                            type="button"
                            variant="secondary"
                            className="footer-button"
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
                    </Card.Footer>
                </div>
            </Card>
        </main>
    );
};

export default FlashCard;
