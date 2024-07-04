import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeSelector from "./components/ThemeSelector";
import { CursorAnimation } from './components/CursorAnimation';
import { ThemeProvider } from "./contexts/ThemeContext";
import BreakpointOverlay from "./utils/BreakpointOverlay";

const AppContent = () => {
  
  return (
    <div className="bg-background">
      <CursorAnimation />
      <ThemeSelector />
      <Navbar />
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
      <BreakpointOverlay />
    </ThemeProvider>
  );
}

export default App;