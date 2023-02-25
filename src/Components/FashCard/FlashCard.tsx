import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../Apis/types";
import Timer from "../Timer/Timer";
import { Loading } from "../Loading/Loading";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import { MyQuestionContext } from "../Context/QuestionContext";

export const FlashCard = () => {
    const { questions } = useContext(MyQuestionContext);
    const { questionId } = useParams();
    const randomId = () =>
        Math.floor(Math.random() * questions.length).toString();
    let randomQuestion = getQuestions(questions, questionId);

    if (!randomQuestion) {
        return <Loading />;
    }

    return (
        <Card>
            <Card.Header>
                <Timer />
            </Card.Header>

            <ArrayMethods cardQuestion={randomQuestion} />

            <Card.Footer>
                <Button
                    onClick={() => {
                        randomQuestion = getQuestions(questions, randomId());
                    }}
                >
                    Next Question
                </Button>
            </Card.Footer>
        </Card>
    );
};
