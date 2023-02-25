import { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Question, getQuestions } from "../../Apis/types";
import Timer from "../Timer/Timer";
import { Loading } from "../Loading/Loading";
import { MyQuestionContext } from "../Context/QuestionContext";
import { MultipleChoiceStyle } from "./FlashCardQuestions/MultipleChoiceStyle/MultipleChoiceStyle";
import { CodeBlockStyle } from "./FlashCardQuestions/CodeBlockStyle/CodeBlockStyle";
import { useParams } from "react-router-dom";

export const FlashCard = () => {
    const { questions } = useContext(MyQuestionContext);
    const { questionId } = useParams();
    const randomId = () => {
        return Math.floor(Math.random() * questions.length).toString();
    };
    const [randomQuestion, setRandomQuestion] = useState<Question | void>(
        getQuestions(questions, questionId)
    );

    if (!randomQuestion) {
        return <Loading />;
    }

    const { style } = randomQuestion;

    console.log(style);
    return (
        <Card>
            <Card.Header>
                <Timer />
            </Card.Header>

            {style === 0 ? (
                <MultipleChoiceStyle cardQuestion={randomQuestion} />
            ) : (
                <CodeBlockStyle cardQuestion={randomQuestion} />
            )}

            <Card.Footer>
                <Button
                    onClick={() => {
                        setRandomQuestion(getQuestions(questions, randomId()));
                    }}
                >
                    Next Question
                </Button>
            </Card.Footer>
        </Card>
    );
};
