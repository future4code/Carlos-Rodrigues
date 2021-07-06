import React from "react";
import Teste from './components/Teste/Teste'
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      Bora lá !
      <Teste/>
    </GlobalState>
  );
}

export default App;
