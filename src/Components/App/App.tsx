import React, { useState } from "react";

import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";

function App() {
    const [loggedIn, setLoggedIn] = useLocalStorage(StorageKey.loggedIn, false);

    return (
        <div className="App">
            {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
            {loggedIn && (
                <div>
                    <Logout setLoggedIn={setLoggedIn} />
                    <FlashCard />
                </div>
            )}
        </div>
    );
}

export default App;
