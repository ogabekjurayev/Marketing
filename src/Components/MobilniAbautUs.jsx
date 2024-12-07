import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function MobilniAbautUs() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="MobilniAbout">
        <div className={`MobilAbout-top-box ${theme}`}>
          <h2 className="MobilAbout-top-box-h2">Biz Haqimizda </h2>
          <p className={`MobilAbout-top-box-p ${theme}`}>
            Agentligimiz kichik va o’rta bizneslar uchun Performace marketing,
            SMM, Kompleks marketing xizmatlarini ko’rsatadi. Hozirgacha 100 dan
            ortiq keyslarga ega, agentlik hozir 25+ loyihalar bilan ishlab
            keladi. Hozirda agentligimizda 7 ta “Facebook ads” mutaxasisi 2 ta
            “Google ads & Yandex Direct” mutaxasisi, 2 ta videograf, 2ta content
            manager va 1ta ROP faoliyat olib boradi
          </p>
        </div>
        <div className="MobilniAbout-bottom-box-1">
          <div className="Mobilni-Biz-Haqimizda-box-1 d-flex">
            <div className={`Mobilni-Tajriba-1 ${theme}`}>
              <h2 className={`Mobilni-Tajriba-h2-1 ${theme}`}>7 yil</h2>
              <p className={`Mobilni-Tajriba-p-1 ${theme}`}>Tajriba</p>
            </div>
            <div className={`Mobilni-Bosh-div-1 ${theme}`}></div>
          </div>
          <div className="Mobilni-Biz-Haqimizda-box-2">
            <div className={`Mobilni-Bosh-div-2 ${theme}`}></div>
            <div className={`Mobilni-Loyiha-2 ${theme}`}>
              <h2 className={`Mobilni-Loyiha-h2-2 ${theme}`}>100+</h2>
              <p className={`Mobilni-Loyiha-p-2 ${theme}`}>Loyiha</p>
            </div>
          </div>
          <div className="Mobilni-Biz-Haqimizda-box-3">
            <div className={`Mobilni-Loyiha-3 ${theme}`}>
              <h2 className={`Mobilni-Loyiha-h2-3 ${theme}`}>3+</h2>
              <p className={`Mobilni-Loyiha-p-3 ${theme}`}>Davlatda mijozlar</p>
            </div>
            <div className={`Mobilni-Bosh-div-3 ${theme}`}></div>
          </div>
          <div className="Mobilni-Biz-Haqimizda-box-4">
            <div className={`Mobilni-Bosh-div-4 ${theme}`}></div>
            <div className={`Mobilni-Loyiha-4 ${theme}`}>
              <h2 className={`Mobilni-Loyiha-h2-4 ${theme}`}>1.500.000$+</h2>
              <p className={`Mobilni-Loyiha-p-4 ${theme}`}>
                Loyihalarga olib kelingan foyda
              </p>
            </div>
          </div>
        </div>
        <h2 className={`Mobil-Biz-Haqimizda-sarlavha ${theme}`}>
          Agentligimiz biznesingiz uchun qanday yechimlar taklif qiladi?
        </h2>
      </div>
    </>
  );
}
