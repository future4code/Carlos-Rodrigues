import React from "react";
import GlobalState from "./global/GlobalState";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <GlobalState>
      <HomePage/>
    </GlobalState>
  );
}

export default App;
