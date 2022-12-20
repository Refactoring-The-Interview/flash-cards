import React, { useState } from "react";
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
} from "react-router-dom";
import { SideNav } from "../SideNav/SideNav";

function App() {
    const [loggedIn, setLoggedIn] = useLocalStorage(StorageKey.loggedIn, false);
    const [flipCardToIDE, setFlipCardToIDE] = useState<boolean>(false);

    return (
        <div className="App">
            {!loggedIn && (
                <Routes>
                    <Route
                        path="/"
                        element={<Login setLoggedIn={setLoggedIn} />}
                    />
                </Routes>
            )}
            {loggedIn && (
                <Routes>
                    {flipCardToIDE && <Route path="/" element={<IDE />} />}
                    <Route
                        path="/"
                        element={
                            <div className="mainDisplayFront">
                                <SideNav />
                                <Logout setLoggedIn={setLoggedIn} />
                                <FlashCard
                                    setFlipCardToIDE={setFlipCardToIDE}
                                />
                            </div>
                        }
                    />
                </Routes>
            )}
        </div>
    );
}

export default App;
