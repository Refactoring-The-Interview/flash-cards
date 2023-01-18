import React, { useEffect, useState } from "react";
import "./ArrayMethodsS.scss";
import { Question } from "../store/types";
import { Button, Card, ListGroup } from "react-bootstrap";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { updateData } from "../Utils/Utils";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props) => {
    const [isCorrect, setIsCorrect] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const { question, answer, answers } = cardQuestion;
    const [currentQuestion, setCurrentQuestion] = useLocalStorage(
        StorageKey.currentQuestion,
        {}
    );
    const [questions, setQuestions] = useLocalStorage(
        StorageKey.questionBank,
        []
    );

    useEffect(() => {
        setIsDisabled(false);
        setIsCorrect("");
    }, [question]);

    return (
        <div className="ArrayMethods">
            <Card className="ArrayMethods-card">
                <Card.Title className="ArrayMethods-description">
                    {question}
                </Card.Title>

                <Card.Body>
                    <ListGroup
                        className={`${isCorrect} ArrayMethods-Answers `}
                        horizontal
                    >
                        {answers.map((item: string, index: number) => {
                            return (
                                <ListGroup.Item
                                    action
                                    variant="light"
                                    className="ArrayMethods-list-button"
                                >
                                    <Button
                                        type="button"
                                        disabled={isDisabled}
                                        style={{}}
                                        key={index}
                                        onClick={(e) => {
                                            setIsDisabled(true);
                                            if (item === answer) {
                                                currentQuestion.correct = true;
                                                updateData(
                                                    currentQuestion,
                                                    setQuestions,
                                                    questions
                                                );
                                                setIsCorrect("success");
                                            } else {
                                                setIsCorrect("danger");
                                            }
                                        }}
                                    >
                                        {item}
                                    </Button>
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};
