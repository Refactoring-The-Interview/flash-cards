import React, { useEffect, useState } from "react";
import "./AppS.scss";
import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";
import { QuestionList } from "../QuestionList/QuestionList";
import { IDE } from "../IDE/IDE";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

function App() {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    const [showQuestionList, setShowQuestionList] = useState<boolean>(false);
    const navigate = useNavigate();
    const [questions] = useLocalStorage(StorageKey.questionBank, []);

    const [currentQuestion, setCurrentQuestion] = useLocalStorage(
        StorageKey.currentQuestion,
        {}
    );

    useEffect(() => {
        const redirectUserQuestions = async () => {
            if (showQuestionList && userInfo.email) {
                return navigate("/question-list");
            }
        };

        const redirectUserFlashCard = async () => {
            if (userInfo.email.length !== 0) {
                return navigate("/flash-card");
            } else {
                return navigate("/login");
            }
        };
        redirectUserFlashCard();
        redirectUserQuestions();
    }, [userInfo, showQuestionList]);

    let randomGen = () => Math.random();
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/flash-card"
                    element={
                        <div className="mainDisplayFront" key={randomGen()}>
                            <Logout />
                            <FlashCard
                                QuestionList={setShowQuestionList}
                                key={randomGen()}
                            />
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
