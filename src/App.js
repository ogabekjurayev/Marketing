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
import MobilniAbautUs from "./Components/MobilniAbautUs";
import { useMediaQuery } from "react-responsive";
import MobilniKunvaTun from "./Components/MobilniKunvaTun";

function App() {
  const { theme } = useContext(ThemeContext);
  function changeBackground(color) {
    document.body.style.background = color;
  }
  useEffect(() => {
    changeBackground(theme === "light" ? "white" : "black");
  }, [theme]);

  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });

  return (
    <div className="container1">
      <Header />
      <div>{isMobile ? <MobilniAbautUs /> : <AbautUs />}</div>
      <div>{isMobile ? <MobilniKunvaTun /> : <KunvaTun />}</div>
      <Loyihalar />
      <Mijozlar />
      <BuMuhim />
      <Footer />
    </div>
  );
}

export default App;
