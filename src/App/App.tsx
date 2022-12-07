import React, { useState } from "react";

import FlashCard from "../Components/FashCard/FlashCard";
import { Login } from "../Components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {loggedIn && <FlashCard />}
    </div>
  );
}

export default App;
