import React, { useState } from "react";

import FlashCard from "../FashCard/FlashCard";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { Login } from "../Login/Login";

function App() {
    const [loggedIn, setLoggedIn] = useLocalStorage(StorageKey.loggedIn, false);

    return (
        <div className="App">
            {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
            {loggedIn && <FlashCard />}
        </div>
    );
}

export default App;
