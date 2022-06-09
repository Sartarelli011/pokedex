import React from "react";
import Header from "./components/Header";
import ListCards from "./components/ListCards";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListCards></ListCards>
      <div className="Btn-div">
        <button className="Btn">Previous</button>
        <button className="Btn">Next</button>
      </div>
    </div>
  );
}

export default App;
