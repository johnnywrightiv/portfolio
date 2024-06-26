import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeProvider, useThemeContext } from "./contexts/ThemeContext";
import BreakpointOverlay from "./utils/BreakpointOverlay";

const AppContent = () => {
  const { dynamicColor } = useThemeContext();
  
  return (
    <div className={`${dynamicColor ? 'bg-dynamic' : 'bg-cta'}`}>
      <ThemeSelector/>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <BreakpointOverlay/>
    </ThemeProvider>
  );
}

export default App;