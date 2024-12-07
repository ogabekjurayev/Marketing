import Sotuv from "../ImgSvg/Sotuv.svg";
import Kamoliddin from "../Imgs/Kamoliddin.png";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Galichka from "../ImgSvg/Galichka.svg";

export default function BottomHeader() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="Bottom-Header">
        <div className={`Bottom-box-1 ${theme}`}>
          <img className="Bottom-box-1-img" src={Sotuv} alt="" />
          <p className={`Bottom-box-1-p ${theme}`}>
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
        <div className={`Bottom-box-2 ${theme}`}>
          <p className={`Bottom-box-2-p ${theme}`}>
            O'ylab o'tirishga <br /> hojat yo'q deb <br /> nomlangan <br />{" "}
            <span className="Bottom-box-2-span">GARANTIYA</span> <br /> Savdo
            hajmi yaxshi tarafga <br /> o'zgarmasa xizmat pulini <br />
            <span className="Bottom-box-2-span">100%</span> qaytaramiz!
          </p>
        </div>
      </div>
    </>
  );
}
