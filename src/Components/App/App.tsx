import React, { useEffect } from "react";
import "./AppS.scss";
import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { QuestionList } from "../QuestionList/QuestionList";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Paths, API, Difficulty } from "../store/types";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";

function useHelper() {
    const testobj = {
        difficulty: Difficulty.medium,
        question:
            "what method executes a provided function once for each array element.",
        answer: "Array.forEach()",
        answers: ["Array.map()", "Array.forEach()", "Array.every()"],
        tags: ["array", "Js"],
        correct: false,
        id: "3",
    };

    useEffect(() => {
        const requestOptions = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: testobj.id, testobj }),
        };

        fetch("/setQuestion", requestOptions);
        // .then((res) => console.log(res.json()))
        // .then((data) => console.log(data));
    }, []);
}

function App() {
    // TODO: implement server functions
    useHelper();

    const [userInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "a",
        password: "",
    });

    const navigate = useNavigate();

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
                <Route path={Paths.questionList} element={<QuestionList />} />
            </Routes>
        </div>
    );
}

export default App;
