import { useEffect } from "react";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import { Paths } from "../../Apis/types";
import { Contact } from "../Contact/Contact";
import { MyQuestionProvider } from "../Context/QuestionContext";
import { FlashCard } from "../FashCard/FlashCard";
import { Home } from "../Home/Home";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { NavBar } from "../NavBar/NavBar";
import { Profile } from "../Profile/Profile";
import { QuestionEdit } from "../QuestionEdit/QuestionEdit";
import { QuestionList } from "../QuestionList/QuestionList";
import { ZeroSumSubarray } from "../ZeroSumSubarray/ZeroSumSubarray";
import "./AppS.scss";

function App() {
    const navigate: NavigateFunction = useNavigate();
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
                    <Route
                        path={Paths.ZeroSumSubarray}
                        element={<ZeroSumSubarray />}
                    />
                    <Route
                        path={Paths.questionEdit}
                        element={<QuestionEdit />}
                    />
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
