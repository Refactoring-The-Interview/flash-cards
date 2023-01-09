import React, { useEffect, useState } from "react";
import "./AppS.scss";
import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";
import { IDE } from "../IDE/IDE";
import {
    Routes,
    Route,
    Outlet,
    Link,
    createBrowserRouter,
    useNavigate,
} from "react-router-dom";

function App() {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    const [flipCardToIDE, setFlipCardToIDE] = useState<boolean>(false);

    let navigate = useNavigate();

    useEffect(() => {
        const redirectUser = async () => {
            if (userInfo.email) {
                return navigate("/home");
            } else {
                return navigate("/login");
            }
        };
        redirectUser();
    }, [userInfo]);

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/home"
                    element={
                        <div className="mainDisplayFront">
                            <Logout />
                            <FlashCard setFlipCardToIDE={setFlipCardToIDE} />
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
