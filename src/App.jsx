import Navbar from "./components/Navbar";
import DarkModeTest from "./components/DarkModeTest";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeSelector/>
        <Navbar/>
        <DarkModeTest />
      </ThemeProvider>
    </>
  )
}

export default App;