import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function AbautUs() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <div className="Line-box">
        <div className="Line"></div>
        <div className="Line"></div>
      </div>
      <div className="AbautUs">
        <div className={`Biz-Haqimizda ${theme}`}>
          <h1 className="Biz-Haqimizda-h1">
            Biz <br /> Haqimizda
          </h1>
          <div className={`Biz-Haqimizda-p ${theme}`}>
            Raqamli marketing agentlikda biz shunchaki reklama qilishdan ko'proq
            narsani qilamiz; ajoyib tajribalar yaratamiz. Jamoamiz bilan
            birgalik sizning brendingizni uchun raqamli yechimlar bera olamiz.
          </div>
        </div>
        <div className="Biz-Haqimizda-bottom">
          <div className="Biz-Haqimizda-box-1">
            <div className={`Bosh-div ${theme}`}></div>
            <div className={`Tajriba ${theme}`}>
              <h2 className={`Tajriba-h2 ${theme}`}>6 yil</h2>
              <p className={`Tajriba-p ${theme}`}>Tajriba</p>
            </div>
          </div>
          <div className="Biz-Haqimizda-box-2">
            <div className={`Loyiha ${theme}`}>
              <h2 className={`Loyiha-h2 ${theme}`}>100+</h2>
              <p className={`Loyiha-p ${theme}`}>Loyiha</p>
            </div>
            <div className={`Bosh-div ${theme}`}></div>
          </div>
          <div className="Biz-Haqimizda-box-3">
            <div className={`Bosh-div ${theme}`}></div>
            <div className={`Loyiha ${theme}`}>
              <h2 className={`Loyiha-h2 ${theme}`}>3+</h2>
              <p className={`Loyiha-p ${theme}`}>Davlatda mijozlar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
