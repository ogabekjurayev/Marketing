import Navbar from "../Imgs/LL.png";
import Light from "../ImgSvg/Light.svg";
import Strelka from "../ImgSvg/strelka.svg";
import Dark from "../ImgSvg/Dark.svg";
import Sotuv from "../ImgSvg/Sotuv.svg";
import Kamoliddin from "../Imgs/Kamoliddin.png";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Galichka from "../ImgSvg/Galichka.svg";

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={`header ${theme}`}>
      <div className="Navbar d-flex justify-content-between">
        <div className={`Navbar-box-1 ${theme}`}>
          <img className="LL" src={Navbar} alt="" />
          <h3 className="R-Marketing">Raqamli Marketing</h3>
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
            <a className="a-Ariza" href="#">
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
      <div className="Bottom-Header">
        <div className="Bottom-box-1">
          <img className="Bottom-box-1-img" src={Sotuv} alt="" />
          <p className="Bottom-box-1-p">
            Kechagidan <br /> ko'proq <br /> soting!
          </p>
        </div>

        <div className="Bottom-Kamoliddin">
          <img className="Kamoliddin" src={Kamoliddin} alt="" />
          <div className="Kamoliddin-obsolud">
            <div className="Kamol-btn">
              <div className="Kamol-btn-blue">
                <h4 className="Kamol-btn-blue-h4">Kamoliddin Mamasodikov</h4>
                <p className="Kamol-btn-blue-p">
                  6yil tajriba,Digital Marketolog
                </p>
              </div>
              <div className="Kamol-Digital">
                kamol.digital{" "}
                <img className="Kamol-dogital-img" src={Galichka} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom-box-2 ">
          <p className="Bottom-box-2-p">
            O'ylab o'tirishga <br /> hojat yo'q deb <br /> nomlangan <br />{" "}
            <span className="Bottom-box-2-span">GARANTIYA</span> <br /> Savdo
            hajmi yaxshi tarafga <br /> o'zgarmasa xizmat pulini <br />
            <span className="Bottom-box-2-span">100%</span> qaytaramiz!
          </p>
        </div>
      </div>
    </div>
  );
}
