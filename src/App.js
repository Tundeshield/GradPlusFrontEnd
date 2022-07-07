import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Smita/Pages/HomePage";
import JobSearchPage from "./Sangeet/Pages/JobSearchPage";
import Dashboard from "./Tunde/Pages/Dashboard";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="jobs" element={<JobSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
