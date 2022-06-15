import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ListCards from "./components/ListCards";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListCards></ListCards>
    </div>
  );
}

export default App;
