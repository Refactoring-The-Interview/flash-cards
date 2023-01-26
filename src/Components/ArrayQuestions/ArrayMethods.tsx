import React, { useContext, useEffect, useState } from "react";
import "./ArrayMethodsS.scss";
import { API, Question } from "../store/types";
import { Button, Card, ListGroup } from "react-bootstrap";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { updateData } from "../Utils/Utils";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props | any) => {
    const [isCorrect, setIsCorrect] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const { question, answer, answers } = cardQuestion;
    // TODO change to state in app and pass down with context
    // const [currentQuestion] = useLocalStorage(StorageKey.currentQuestion, {});
    const { questions, setQuestions } = useContext(MyQuestionContext);

    useEffect(() => {
        setIsDisabled(false);
        setIsCorrect("");
    }, [question]);

    useEffect(() => {
        const requestOptions = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: "questions",
                questions: questions,
            }),
        };

        fetch(API.addQuestion, requestOptions).then((res) =>
            console.log(res.status)
        );
    }, [questions]);

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
