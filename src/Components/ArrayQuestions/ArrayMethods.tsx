import React, { useState } from "react";
import "./ArrayMethodsS.scss";
import { Question } from "../store/types";
import { Button, Card, ListGroup } from "react-bootstrap";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props) => {
    const [isCorrect, setIsCorrect] = useState<string>("");
    const { question, answer, answers } = cardQuestion;

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
                                        style={{}}
                                        key={index}
                                        onClick={(e) => {
                                            if (item === answer) {
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
