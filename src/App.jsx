import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Apply dark mode class to the <body> element
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>404 - Not Found</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
