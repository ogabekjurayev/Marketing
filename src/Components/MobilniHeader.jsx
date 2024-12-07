import Sotuv from "../ImgSvg/Sotuv.svg";
import Kamoliddin from "../Imgs/Kamoliddin.png";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Galichka from "../ImgSvg/Galichka.svg";

export default function MobilniHeader() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="Mobilni-Header-hight">
      <div className="Mobilni-Header ">
        <div className="Mobilni-Header-left">
          <img className="Mobilni-Kamoliddin" src={Kamoliddin} alt="" />
          <div className="Mobil-Header-left-bottom">
            <div className="Mobil-Header-left-bottom-kuk">
              <h5 className="Mobil-Header-left-bottom-h5">
                Kamoliddin Mamasodikov
              </h5>
              <p className="Mobil-Header-left-bottom-p">
                7 yil tajriba, Digital Marketolog
              </p>
            </div>
            <div className="Mobil-Header-digital d-flex ">
              kamol.digital
              <img className="Mobil-Header-digital-img" src={Galichka} alt="" />
            </div>
          </div>
        </div>
        <div className={`Mobilni-Header-right ${theme}`}>
          <div className="Mobil-header-box ">
            <img className="Mobil-Header-sotuv" src={Sotuv} alt="" />
            <p className={`Mobil-Header-right-p1 ${theme}`}>
              Kechagidan ko'proq soting!
            </p>
          </div>
          <p className={`Mobil-Header-right-p2 ${theme}`}>
            O'ylap o'tirishga hojat yo'q deb nomlangan
            <br /> <span className="Mobil-Header-right-span">Garantiya</span>
          </p>
          <p className={`Mobil-Header-right-p3 ${theme}`}>
            Savdo hajmi yaxshi tarafga o'zgarmasa xizmat pulini{" "}
            <span className="Mobil-Header-right-span">100%</span>qaytaramiz!
          </p>
        </div>
      </div>
    </div>
  );
}
