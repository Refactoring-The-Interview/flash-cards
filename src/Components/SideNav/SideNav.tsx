import React, { useState } from "react";
import "./SideNavS.scss";
import { useLocalStorage, StorageKey } from "../LocalStorage/LocalStorage";
import { Question } from "../store/types";

export const SideNav = () => {
    const [display, setDisplay] = useState<boolean>(false);
    const [questions] = useLocalStorage(StorageKey.questionBank, []);

    return (
        <div className="SideNav">
            {!display && (
                <div>
                    <button onClick={() => setDisplay(true)}>Questions</button>
                </div>
            )}
            {display && (
                <div>
                    <select>
                        {questions.map((question: Question, itdex: number) => {
                            console.log(question);
                            return <option>{question.answer}</option>;
                        })}
                    </select>
                </div>
            )}
        </div>
    );
};
