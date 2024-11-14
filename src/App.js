import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import AbautUs from "./Components/AbautUs";
import { ThemeContext } from "./ThemeContext";
import KunvaTun from "./Components/KunvaTunNima";

function App() {
  const { theme } = useContext(ThemeContext);
  function changeBackground(color) {
    document.body.style.background = color;
  }
  useEffect(() => {
    changeBackground(theme === "light" ? "black" : "white");
  }, [theme]);

  return (
    <div className="container1">
      <Header />
      <AbautUs />
      <KunvaTun />
    </div>
  );
}

export default App;
