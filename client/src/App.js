import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useSession } from "@supabase/auth-helpers-react";


import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import LoginPage from "./pages/LoginPage";
import PlantsPage from "./pages/PlantsPage";
import HowToUse from "./components/HowToUse";

import "./App.scss"



const App = () => {
  const session = useSession({});

  useEffect(() => {
    if (session) {
      document.cookie = `refreshToken=${session.refresh_token}; path=/;`
      document.cookie = `accessToken=${session.access_token}; path=/;`
    }
  }, [session?.access_token, session?.refresh_token])
  


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<HowToUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
