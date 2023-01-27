import React, { useContext, useEffect, useState } from "react";
import "./ArrayMethodsS.scss";

import { Button, Card, ListGroup } from "react-bootstrap";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { API, Question } from "../../Apis/types";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props | any) => {
    const [isCorrect, setIsCorrect] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const { question, answer, answers } = cardQuestion;
    const { addQuestion } = useContext(MyQuestionContext);

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
                                    key={index}
                                >
                                    <Button
                                        type="button"
                                        disabled={isDisabled}
                                        key={index}
                                        onClick={(e) => {
                                            setIsDisabled(true);
                                            if (item === answer) {
                                                cardQuestion.correct = true;
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
