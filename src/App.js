import React from "react";
import { NavigationBar } from "./components/NavigationBar";
import { Routes } from "./routes";

import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes />
    </div>
  );
}

export default App;
