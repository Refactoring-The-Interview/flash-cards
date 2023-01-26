import React, { useEffect, useState } from "react";
import "./AppS.scss";
import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { QuestionList } from "../QuestionList/QuestionList";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Paths, API, Question } from "../store/types";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";
import { MyQuestionContext } from "../QuestionContext/QuestionContext";

const useQuestions = () => {
    const [questions, setQuestions] = useState<Array<Question>>([]);

    useEffect(() => {
        const requestOptions = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: "questions",
            }),
        };

        fetch(API.question, requestOptions)
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    return questions;
};

function App() {
    const questions = useQuestions();

    const navigate = useNavigate();
    const [userInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });

    useEffect(() => {
        const redirectUserFlashCard = async () => {
            if (userInfo.email.length < 1) {
                return navigate(Paths.login);
            }
        };
        redirectUserFlashCard();
    }, [navigate, userInfo]);

    return (
        <div className="App">
            <MyQuestionContext.Provider
                value={{ questions, setQuestions(newQuestions) {} }}
            >
                <NavBar />
                <Routes>
                    <Route path={Paths.login} element={<Login />} />
                    <Route path={Paths.home} element={<Home />} />
                    <Route path={Paths.contact} element={<Contact />} />
                    <Route
                        path={Paths.question}
                        element={
                            <div className="mainDisplayFront">
                                <FlashCard />
                            </div>
                        }
                    />
                    <Route
                        path={Paths.questionList}
                        element={<QuestionList />}
                    />
                </Routes>
            </MyQuestionContext.Provider>
        </div>
    );
}

export default App;
