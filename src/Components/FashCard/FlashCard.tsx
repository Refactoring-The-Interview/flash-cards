import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Question, getQuestions } from "../../Apis/types";
import { MyQuestionContext } from "../Context/QuestionContext";
import { Loading } from "../Loading/Loading";
import Timer from "../Timer/Timer";
import { CodeBlockStyle } from "./FlashCardQuestions/CodeBlockStyle/CodeBlockStyle";
import { MultipleChoiceStyle } from "./FlashCardQuestions/MultipleChoiceStyle/MultipleChoiceStyle";
import "./FlashCardS.scss";

export const FlashCard = () => {
    const { questions } = useContext(MyQuestionContext);
    const { questionId } = useParams();
    const randomId = () => {
        return Math.floor(Math.random() * questions.length).toString();
    };

    const [randomQuestion, setRandomQuestion] = useState<Question | void>(
        getQuestions(questions, questionId)
    );

    useEffect(() => {
        setRandomQuestion(getQuestions(questions, questionId));
    }, [questionId, questions]);

    const [showSolution, setShowSolution] = useState<boolean>(false);

    if (!randomQuestion) {
        return <Loading />;
    }

    const { style } = randomQuestion;

    return (
        <Card className="FlashCard">
            <Card.Header className="FlashCardTimer">
                <Timer currentQuestion={randomQuestion} />
            </Card.Header>

            {style === 0 ? (
                <MultipleChoiceStyle cardQuestion={randomQuestion} />
            ) : (
                <CodeBlockStyle
                    cardQuestion={randomQuestion}
                    showSolution={showSolution}
                />
            )}

            <Card.Footer>
                <Button
                    onClick={() => {
                        setRandomQuestion(getQuestions(questions, randomId()));
                    }}
                >
                    Next Question
                </Button>{" "}
                {style === 1 && (
                    <Button
                        variant="outline-primary"
                        onClick={() => setShowSolution(!showSolution)}
                    >
                        {" "}
                        Show A Solution
                    </Button>
                )}
            </Card.Footer>
        </Card>
    );
};
