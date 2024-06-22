import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DarkModeTest from "./components/DarkModeTest";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeSelector/>
        <Navbar/>
        <Hero />
        <DarkModeTest />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  )
}

export default App;