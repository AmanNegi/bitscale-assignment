import { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import Pricing from "@/pages/pricing/presentation/Pricing";
import Home from "@/pages/home/presentation/Home";

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from local storage 
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Change theme based on state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
  };

  return (
    <Router>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-primaryAccent text-white shadow-lg hover:bg-secondary transition-colors z-50"
      >
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
