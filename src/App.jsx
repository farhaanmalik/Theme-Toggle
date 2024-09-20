import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={`app ${theme}`}>
        <h1>Theme Toggle App</h1>
        <p>The current theme is {theme}</p>
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "dark" : "light"} mode
        </button>
      </div>
    </>
  )
}

export default App
