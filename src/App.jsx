import React from "react";
import "./App.scss";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
