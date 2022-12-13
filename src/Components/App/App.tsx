import React, { useState } from "react";
import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";
import {
    Routes,
    Route,
    Outlet,
    Link,
    createBrowserRouter,
} from "react-router-dom";

function App() {
    const [loggedIn, setLoggedIn] = useLocalStorage(StorageKey.loggedIn, false);

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
                    <Route
                        path="/"
                        element={
                            <div className="mainDisplay">
                                <Logout setLoggedIn={setLoggedIn} />
                                <FlashCard />
                            </div>
                        }
                    />
                </Routes>
            )}
        </div>
    );
}

export default App;
