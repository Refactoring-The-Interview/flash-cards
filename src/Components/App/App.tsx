import React, { useEffect } from "react";
import "./AppS.scss";
import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { QuestionList } from "../QuestionList/QuestionList";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";
import { MyQuestionProvider } from "../QuestionContext/QuestionContext";
import { Paths } from "../../Apis/types";
import { Profile } from "../Profile/Profile";
import { Loading } from "../Loading/Loading";

function App() {
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
            <MyQuestionProvider>
                <NavBar />
                <Routes>
                    <Route path={Paths.loading} element={<Loading />} />
                    <Route path={Paths.profile} element={<Profile />} />
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
            </MyQuestionProvider>
        </div>
    );
}

export default App;
