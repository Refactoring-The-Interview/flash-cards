import { useContext, useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useRandomQuestion } from "../Utils/useRandomQuestion";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";
import { Loader } from "@aws-amplify/ui-react";
import { Paths, Question, pathGenerator } from "../../Apis/types";

const FlashCard = () => {
    const { questions } = useContext(MyQuestionContext);
    const randomId = Math.floor(Math.random() * questions.length + 1);
    const navigate = useNavigate();
    const currentQuestion = questions[randomId];

    if (questions.length === 0) {
        return <Loader />;
    } else {
        return (
            <>
                <Card>
                    <Card.Header>
                        <Timer />
                    </Card.Header>
                    <Card.Body>
                        <ArrayMethods cardQuestion={currentQuestion} />
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            onClick={(e) => {
                                const path = pathGenerator[Paths.question](
                                    questions[randomId].id
                                );
                                navigate(path);
                            }}
                        >
                            Next Question
                        </Button>
                    </Card.Footer>
                </Card>
            </>
        );
    }
};

export default FlashCard;
