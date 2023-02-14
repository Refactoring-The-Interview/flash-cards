import { Button, Card } from "react-bootstrap";
import { Question } from "../../Apis/types";
import "./ArrayMethodsS.scss";
import { useState } from "react";

interface Props {
    cardQuestion: Question;
}

export const ArrayMethods = ({ cardQuestion }: Props) => {
    const { question, answers, answer } = cardQuestion;
    const [isCorrect, setIsCorrect] = useState<string>("");

    return (
        <Card.Body>
            <Card.Text>
                <h5>{question}</h5>
            </Card.Text>

            {answers.map((possibleAnswer) => {
                return (
                    <Button
                        className={`ArrayMethods-Answers ${isCorrect}`}
                        onClick={(e) => {
                            if (possibleAnswer === answer) {
                                setIsCorrect("success");
                            } else {
                                setIsCorrect("danger");
                            }
                        }}
                    >
                        {answer}
                    </Button>
                );
            })}
        </Card.Body>
    );
};
