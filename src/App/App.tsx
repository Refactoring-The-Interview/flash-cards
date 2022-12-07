import React, { useState } from "react";

import FlashCard from "../Components/FashCard/FlashCard";
import { Login } from "../Components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const tryLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="App">
      {!loggedIn && <Login tryLogin={tryLogin} />}
      {loggedIn && <FlashCard />}
    </div>
  );
}

export default App;
