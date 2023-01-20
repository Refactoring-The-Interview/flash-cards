import React, { useEffect, useState } from "react";
import { ArrayMethods } from "../ArrayQuestions/ArrayMethods";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";
import Timer from "../Timer/Timer";
import "./FlashCardS.scss";
import { randomizer } from "../QuestionRandomizer/randomizer";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Paths, Question } from "../store/types";
import { useNavigate, useParams } from "react-router-dom";

const FlashCard = ({ QuestionList }: any) => {
    const [questions] = useLocalStorage(StorageKey.questionBank, []);
    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );
    const { questionId } = useParams();
    console.log(questionId);
    const [currentQuestion, setCurrentQuestion] = useState<Array<Question>>(
        questions.find(({ id }: string | any) => id === questionId)
    );

    useEffect(() => {
        setCurrentQuestion(randomizer(questions));
    }, []);
    const navigate = useNavigate();
    console.log(currentQuestion);

    return (
        <Card>
            <div className="FlashCardHeader">
                <Card.Header className="cardHeader">
                    <div className="FlashCardHeader-timer">
                        <Timer />
                    </div>

                    <CardGroup className="FlashCardHeader-buttons">
                        <Button
                            type="button"
                            variant="secondary"
                            className="FlashCardHeader-button"
                            onClick={() => {
                                navigate(Paths.questionList);
                            }}
                        >
                            Question List
                        </Button>

                        <Button type="button" variant="secondary">
                            Submit
                        </Button>
                    </CardGroup>
                </Card.Header>
            </div>

            {/* <ArrayMethods cardQuestion={currentQuestion} /> */}
            <div className="FlashCardFooter">
                <Card.Footer className="cardFooter">
                    <AddQuestionForm />

                    <Button
                        type="button"
                        variant="secondary"
                        className="footer-button"
                        onClick={(e) => {
                            setCurrentQuestion(
                                randomizer(
                                    filteredQuestionBank?.length > 0 &&
                                        filteredQuestionBank
                                        ? filteredQuestionBank
                                        : questions
                                )
                            );
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
