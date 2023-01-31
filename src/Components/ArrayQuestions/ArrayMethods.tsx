import React, { useContext, useEffect, useState } from "react";
import "./ArrayMethodsS.scss";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Question } from "../../Apis/types";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props) => {
    const { questions, setQuestions, addQuestion } =
        useContext(MyQuestionContext);
    const [isCorrect, setIsCorrect] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const { question, answer, answers } = cardQuestion;

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
                                                // TODO tack correct, do i need to create another api to update a question? do with alex for work and data flow.
                                                addQuestion(cardQuestion);
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
