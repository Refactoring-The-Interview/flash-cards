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
import { Paths } from "../store/types";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";

function App() {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "a",
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
        const redirectUserFlashCard = async () => {
            if (userInfo.email.length > 1) {
                return navigate("/login");
            }
        };
        redirectUserFlashCard();
    }, [userInfo]);

    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path={Paths.login} element={<Login />} />
                <Route path={Paths.home} element={<Home />} />
                <Route path={Paths.contact} element={<Contact />} />
                <Route
                    path={Paths.flashCard}
                    element={
                        <div className="mainDisplayFront">
                            <Logout />
                            <FlashCard QuestionList={setShowQuestionList} />
                        </div>
                    }
                />
                <Route
                    path={Paths.questionList}
                    element={
                        <QuestionList
                            setShowQuestionList={setShowQuestionList}
                            showQuestionList={showQuestionList}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
