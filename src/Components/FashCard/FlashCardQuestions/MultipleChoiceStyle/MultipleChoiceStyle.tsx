import React, { useContext, useEffect, useState } from "react";
import "./MultipleChoiceStyle.scss";
import { Button, Card, ListGroup } from "react-bootstrap";
import { newAnswersValidation } from "../../../../Apis/utils";
import { Question } from "../../../../Apis/types";
import { updateQuestion } from "../../../../Apis/Questions/updateQuestion";
import { MyQuestionContext } from "../../../Context/QuestionContext";

interface Props {
    cardQuestion: Question;
}

export const MultipleChoiceStyle = ({ cardQuestion }: Props) => {
    const { questions } = useContext(MyQuestionContext);
    const [isCorrect, setIsCorrect] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    let { question, answer, answers } = cardQuestion;
    answers = newAnswersValidation({ answers });

    useEffect(() => {
        setIsDisabled(false);
        setIsCorrect("");
    }, [question]);

    return (
        <div className="MultipleChoiceStyle">
            <Card className="MultipleChoiceStyle-card">
                <Card.Title className="MultipleChoiceStyle-description">
                    {question}
                </Card.Title>

                <Card.Body>
                    <ListGroup
                        className={`${isCorrect} MultipleChoiceStyle-Answers `}
                        horizontal
                    >
                        {answers.map((item: string, index: number) => {
                            return (
                                <ListGroup.Item
                                    action
                                    variant="light"
                                    className="MultipleChoiceStyle-list-button"
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
