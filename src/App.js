import React from 'react';
import { Navbar } from './components/Navbar';
import { Routes } from './routes';



import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
