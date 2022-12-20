import React, { useState } from "react";
import "./QuestionListS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question } from "../store/types";

interface Props {
    setCardQuestion(Question: Question): void;
    Questions: Array<Question>;
}

export const QuestionList = ({ setCardQuestion, Questions }: any) => {
    return (
        <div className="QuestionList">
            <div>
                <form>
                    <select
                        onChange={(e) => {
                            let selectedQuestion = Questions.find(
                                ({ answer }: any) => answer === e.target.value
                            );
                            setCardQuestion(selectedQuestion);
                        }}
                    >
                        {Questions.map((question: Question, index: number) => {
                            return (
                                <option key={index}>{question.answer}</option>
                            );
                        })}
                    </select>
                </form>
            </div>
        </div>
    );
};
