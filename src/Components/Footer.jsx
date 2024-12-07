import instagram from "../ImgSvg/instagram.svg";
import tel from "../ImgSvg/Phone_1.svg";
import sms from "../ImgSvg/Mail.svg";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import ins2 from "../ImgSvg/Group_16.svg";

export default function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="Footer-all">
        <div className={`RaqamliMCHJ ${theme}`}>"Raqamli" MCHJ</div>
        <div className="Instagramgroup">
          <a
            className="Instageam-a"
            href="https://www.instagram.com/raqamli.marketing/"
          >
            <img className="Instagram-img" src={instagram} alt="/" />
            <img className={`Instagram-img2 ${theme}`} src={ins2} alt="/" />
            <p className={`Instagram-p ${theme}`}>Instagram</p>
          </a>
        </div>
        <div className="Telgroup-SmSgroup ">
          <div className="tel-all">
            <a className="Telgroup-a " href="tel:998333303930">
              <img className="Telgroup" src={tel} alt="" />
              <p className={`Telgroup-p ${theme}`}>+998 33 330 39 30</p>
            </a>
          </div>

          <div className="sms-all">
            <a className="Sms-a" href="mailto:raqamli.marketing@gmail.com">
              <img className="Sms-img" src={sms} alt="/" />
              <p className={`Sms-p ${theme}`}>raqamli.marketing@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
