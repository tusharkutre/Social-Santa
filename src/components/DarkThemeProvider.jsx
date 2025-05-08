import { createContext , useState , useEffect ,useContext } from "react";
import "../App.css"
// Create a context for dark mode
const DarkThemeContext = createContext();

// Creating a custom hook to use the dark theme context
export const useDarkTheme = () => useContext(DarkThemeContext);

//provider component
const DarkThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // state to manage dark mode

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode); // function to toggle dark mode

  const darkMode = () => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }

  useEffect(() => {
    darkMode();
  }, [isDarkMode]);

  // value to be provided to the consumer
  // this will be used in the child components
  const value = {
    isDarkMode,
    toggleDarkMode,
  }

  return (
    <DarkThemeContext.Provider value={value}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export { DarkThemeProvider };