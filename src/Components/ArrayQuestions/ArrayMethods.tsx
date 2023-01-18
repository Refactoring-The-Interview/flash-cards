import React, { useState } from "react";
import "./ArrayMethodsS.scss";
import { Question } from "../store/types";
import { Button, Card } from "react-bootstrap";

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
                    <ul className="ArrayMethods-Answers">
                        {answers.map((item: string, index: number) => {
                            return (
                                <Button
                                    type="button"
                                    className={`primary-outline ${
                                        selectedAnswer
                                            ? selectedCss
                                            : defaultCss
                                    }`}
                                    key={index}
                                    onClick={(e) => {
                                        setSelectedAnswer(item);
                                    }}
                                >
                                    {item}
                                </Button>
                            );
                        })}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
};
