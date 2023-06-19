import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import LoginPage from "./pages/LoginPage";

import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
