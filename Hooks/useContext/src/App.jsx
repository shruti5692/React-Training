import React, { useState, createContext } from "react";
import ChildA from "./components/ChildA";
import "./App.css";  


const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div id="container" style={{ backgroundColor: theme === "light" ? "beige" : "black" }}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
