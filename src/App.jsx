// App.jsx
import "./App.css";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import SmoothScroll from "./components/SmoothScroll";
import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // state to manage dark mode

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode); // function to toggle dark mode

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <SmoothScroll>
      {/* child components */}
      <Hero toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <CTA isDarkMode={isDarkMode} />
      <Stats />
      <Features isDarkMode={isDarkMode} />
      <Testimonials />
      <Contact isDarkMode={isDarkMode} />
    </SmoothScroll>
  );
}

export default App;