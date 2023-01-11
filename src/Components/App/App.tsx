import React, { useEffect, useState } from "react";
import "./AppS.scss";
import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";
import { QuestionList } from "../QuestionList/QuestionList";
import { IDE } from "../IDE/IDE";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    // const [flipCardToIDE, setFlipCardToIDE] = useState<boolean>(false);
    const [showQuestionList, setShowQuestionList] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const redirectUser = async () => {
            if (userInfo.email) {
                return navigate("/home");
            } else {
                return navigate("/login");
            }
        };
        redirectUser();

        const redirectUserQuestions = async () => {
            if (showQuestionList && userInfo.email) {
                return navigate("/question-list");
            }
        };
        redirectUserQuestions();
    }, [userInfo, showQuestionList]);

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/home"
                    element={
                        <div className="mainDisplayFront">
                            <Logout />
                            <FlashCard QuestionList={setShowQuestionList} />
                        </div>
                    }
                />
                <Route
                    path="/question-list"
                    element={
                        <QuestionList
                            setShowQuestionList={setShowQuestionList}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
