import React, { useState } from "react";
import "./ArrayMethodsS.scss";
import { Question } from "../store/types";
import { Button, Card, ListGroup } from "react-bootstrap";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props) => {
    const correctCss = "btn btn-success";
    const incorrectCss = "btn btn-danger";
    const defaultCss = "btn btn-outline-info";
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { question, answer, answers } = cardQuestion;
    const isCorrect = selectedAnswer === answer;
    const selectedCss = isCorrect ? correctCss : incorrectCss;

    return (
        <div className="ArrayMethods">
            <Card className="ArrayMethods-card">
                <Card.Title className="ArrayMethods-description">
                    {question}
                </Card.Title>

                <Card.Body>
                    <ListGroup className="ArrayMethods-Answers" horizontal>
                        {answers.map((item: string, index: number) => {
                            return (
                                <ListGroup.Item
                                    action
                                    variant="light"
                                    className="ArrayMethods-list-button"
                                >
                                    <Button
                                        type="button"
                                        key={index}
                                        onClick={(e) => {
                                            setSelectedAnswer(item);
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
