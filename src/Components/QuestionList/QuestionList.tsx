import React, { useState } from "react";
import "./QuestionListS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question } from "../store/types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./QuestionListS.scss";
import JsImage from "../../Assets/1627664298-javascript.jpg";
import Form from "react-bootstrap/Form";

interface Props {
    setCardQuestion(Question: Question): void;
    Questions: Array<Question>;
}

export const QuestionList = ({ setShowQuestionList }: any) => {
    const [questions, setQuestions] = useLocalStorage(
        StorageKey.questionBank,
        []
    );
    const [filteredQuestionBank, setFilteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );

    const [currentQuestion, setCurrentQuestion] = useLocalStorage(
        StorageKey.currentQuestion,
        {}
    );

    const [questionType, setQuestionType] = useState<string>("");

    if (questionType) {
        let filter = questions.filter((question: Question) => {
            return question.tags.includes(questionType);
        });
        setFilteredQuestionBank(filter);
        setQuestionType("");
    }

    let currentQuestions =
        filteredQuestionBank?.length > 0 ? questions : filteredQuestionBank;

    return (
        <div className="QuestionList">
            <Form.Select
                className="select-bar"
                aria-label="Default select example"
                onChange={(e) => {
                    setQuestionType(e.target.value);
                }}
            >
                <option value="all">Default Filter</option>
                <option value="array">Array</option>
                <option value="object">Objects</option>
            </Form.Select>

            {currentQuestions.map((q: any, index: number) => {
                return (
                    <Card className="card" key={index}>
                        <Card.Img variant="top" src={JsImage} className="img" />
                        <Card.Body>
                            <Card.Title className="title">
                                {q.answer}
                            </Card.Title>
                            <Card.Text className="text">{q.question}</Card.Text>
                            <Card.Subtitle className="tags">
                                Tags:
                                {q.tags.map((tag: string, index: number) => {
                                    return <div key={index}>{tag}</div>;
                                })}
                            </Card.Subtitle>
                            <Button
                                variant="primary"
                                onClick={(e) => {
                                    console.log(questions[index], index);
                                    setCurrentQuestion(questions[index]);
                                    setShowQuestionList(false);
                                }}
                            >
                                Select Question
                            </Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};
