import { useContext, useState } from "react";
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
    const [showSolution, setShowSolution] = useState<boolean>(false);

    if (!randomQuestion) {
        return <Loading />;
    }

    const { style } = randomQuestion;

    return (
        <Card>
            <Card.Header>
                <Timer />
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
