import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import AbautUs from "./Components/AbautUs";
import { ThemeContext } from "./ThemeContext";
import KunvaTun from "./Components/KunvaTunNima";
import Loyihalar from "./Components/Loyihalar";
import Mijozlar from "./Components/Mijozlar";
import BuMuhim from "./Components/BuMuhim";
import Footer from "./Components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  function changeBackground(color) {
    document.body.style.background = color;
  }
  useEffect(() => {
    changeBackground(theme === "light" ? "white" : "black");
  }, [theme]);

  return (
    <div className="container1">
      <Header />
      <AbautUs />
      <KunvaTun />
      <Loyihalar />
      <Mijozlar />
      <mantaxlagan />
      <BuMuhim />
      <Footer />
    </div>
  );
}

export default App;
