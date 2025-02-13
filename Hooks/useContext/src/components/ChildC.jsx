import React, { useContext } from "react";
import { ThemeContext } from "../App"; 

const ChildC = () => {
  const [theme, setTheme] = useContext(ThemeContext); 

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default ChildC;
