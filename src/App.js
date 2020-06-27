import React from "react";
import { NavigationBar } from "./components/NavigationBar";
import { Routes } from "./routes";
import ThemeContext from "./context/ThemeContext";

import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <ThemeContext.Provider value="primary">
        <NavigationBar />
        <Routes />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
