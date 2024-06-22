import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeSelector/>
        <Navbar/>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  )
}

export default App;