import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CompetitionDetail from "./pages/CompetitionDetail";
import "nes.css/css/nes.min.css";
import "./components/Components.css";
import "./components/Timeline.css";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const hash = params.get("hash");
    if (hash) {
      // Use a timeout to ensure the component has rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lomba/:id" element={<CompetitionDetail />} />
      </Routes>
    </>
  );
}

export default App;
