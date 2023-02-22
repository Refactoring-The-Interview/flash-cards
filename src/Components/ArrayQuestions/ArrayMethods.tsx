import React, { useContext, useEffect, useState } from "react";
import "./ArrayMethodsS.scss";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Question } from "../../Apis/types";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { newAnswersValidation } from "../../Apis/utils";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props) => {
    const { questions, updateQuestion } = useContext(MyQuestionContext);
    const [isCorrect, setIsCorrect] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    let { question, answer, answers } = cardQuestion;
    answers = newAnswersValidation({ answers });

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
                                                updateQuestion(questions);
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
