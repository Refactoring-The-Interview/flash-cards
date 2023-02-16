import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { useParams } from "react-router-dom";
import { Question, getQuestions } from "../../Apis/types";
import Timer from "../Timer/Timer";
import { Loading } from "../Loading/Loading";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";

export const FlashCard = () => {
    const { questions } = useContext(MyQuestionContext);
    const { questionId } = useParams();
    const randomId = Math.floor(
        Math.random() * questions.length + 1
    ).toString();
    const [randomQuestion, setRandomQuestion] = useState<Question | undefined>(
        getQuestions(questions, questionId)
    );

    if (!randomQuestion) return <Loading />;

    return (
        <Card>
            <Card.Header>
                <Timer />
            </Card.Header>

            <ArrayMethods cardQuestion={randomQuestion} />

            <Card.Footer>
                <Button
                    onClick={() => {
                        setRandomQuestion(getQuestions(questions, randomId));
                    }}
                >
                    Next Question
                </Button>
            </Card.Footer>
        </Card>
    );
};
