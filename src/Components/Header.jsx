import Navbar from "../Imgs/LL.png";
import Light from "../ImgSvg/Light.svg";
import Strelka from "../ImgSvg/strelka.svg";
import Dark from "../ImgSvg/Dark.svg";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useMediaQuery } from "react-responsive";
import MobilniHeader from "./MobilniHeader";
import BottomHeader from "./BottomHeader";

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);

  const isMobile = useMediaQuery({ query: "(max-width: 437px)" });

  return (
    <>
      <div className="Navbar d-flex justify-content-between">
        <div className={`Navbar-box-1 ${theme}`}>
          <img className="LL" src={Navbar} alt="" />
          <h3 className={`R-Marketing ${theme}`}>
            Raqamli <br /> Marketing
          </h3>
        </div>
        <div className="Navbar-box-2">
          <div onClick={toggleTheme}>
            <img
              className="Light"
              src={theme === "dark" ? Light : Dark}
              alt=""
            />
          </div>
          <div className="box-2-a">
            <img className="Strelka" src={Strelka} alt="" />
            <a className="a-Ariza" href="http://localhost:3000">
              Ariza Yuborish
            </a>
          </div>
        </div>
      </div>
      <div className="Center-Header">
        <h1 className={`Center-Header-h1 ${theme}`}>
          <span className="Center-Header-span">34 KUN</span>ICHIDA
          SAVDOLARINGIZNI <span className="Center-Header-span">70% GACHA</span>
          OSHIRING!
        </h1>
      </div>
      <div className="box-shadow d-flex justify-content-between align-items-center">
        <div className="box"></div>
        <div className="box1"></div>
      </div>
      <div>{isMobile ? <MobilniHeader /> : <BottomHeader />}</div>
    </>
  );
}
