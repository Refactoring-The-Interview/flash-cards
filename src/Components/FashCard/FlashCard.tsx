import React, { useEffect, useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Paths, Question, pathGenerator } from "../store/types";
import { useNavigate, useParams } from "react-router-dom";
import { useRandomQuestion } from "../Utils/useRandomQuestion";

const FlashCard = ({ QuestionList }: any) => {
    const { questionId } = useParams();
    const randomQuestion = useRandomQuestion();
    const navigate = useNavigate();
    const [questions] = useLocalStorage(StorageKey.questionBank, []);
    const [currentQuestion, setCurrentQuestion] = useState<Array<Question>>(
        questions.find(({ id }: string | any) => id === questionId)
    );

    if (!currentQuestion) return <h2>Oops, couldn't find questions!</h2>;

    return (
        <Card>
            <div className="FlashCardHeader">
                <Card.Header className="cardHeader">
                    <div className="FlashCardHeader-timer">
                        <Timer />
                    </div>

                    <CardGroup className="FlashCardHeader-buttons">
                        <Button type="button" variant="secondary">
                            Submit
                        </Button>
                    </CardGroup>
                </Card.Header>
            </div>

            <ArrayMethods cardQuestion={currentQuestion} />
            <div className="FlashCardFooter">
                <Card.Footer className="cardFooter">
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={(e) => {
                            setCurrentQuestion(randomQuestion);
                        }}
                    >
                        Next Question
                    </Button>
                </Card.Footer>
            </div>
        </Card>
    );
};

export default FlashCard;
