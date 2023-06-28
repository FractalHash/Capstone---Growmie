import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import Login from "./components/Login";
import PlantsPage from "./pages/PlantsPage";

import "./App.scss";

const App = () => {
  const session = useSession({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (session?.provider_refresh_token) {
      document.cookie = `refreshToken=${session.provider_refresh_token}; path=/;`;
      document.cookie = `accessToken=${session.provider_token}; path=/;`;
    }
  }, [session, session?.provider_token, session?.provider_refresh_token]);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Nav onLoginClick={openLoginModal} closeModal={closeModal} />
      <Routes>
        <Route path="/" element={<HomePage  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} openModal={openModal} closeModal={closeModal}/>} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/plants" element={<PlantsPage />} />
      </Routes>
      {isLoginModalOpen && (
        <Login onClose={closeLoginModal} />
      )}
    </BrowserRouter>
  );
};

export default App;
