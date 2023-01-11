import React, { useState } from "react";
import "./QuestionListS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question } from "../store/types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./QuestionListS.scss";
import JsImage from "../../Assets/1627664298-javascript.jpg";

interface Props {
    setCardQuestion(Question: Question): void;
    Questions: Array<Question>;
}

export const QuestionList = ({ setCardQuestion, Questions }: any) => {
    const [questions] = useLocalStorage(StorageKey.questionBank, []);
    const [filteredQuestionBank] = useLocalStorage(
        StorageKey.filteredQuestionBank,
        []
    );

    return (
        <div className="QuestionList">
            {questions.map(() => {
                return (
                    <Card className="card">
                        <Card.Img variant="top" src={JsImage} className="img" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build
                            </Card.Text>
                            <Card.Subtitle>tags</Card.Subtitle>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

// <div className="QuestionList">
//     <div>
//         <form className="QuestionList__form">
//             <label className="label">Question List: </label>

//             {questions.map((question: Question, index: number) => {
//                 return <button key={index}>{question.answer}</button>;
//             })}
//         </form>
//     </div>
// </div>
