import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import State from "./pages/State";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/state" element={<State />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
