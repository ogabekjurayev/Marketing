import vaqt from "../ImgSvg/Time.svg";
import soat from "../ImgSvg/soat.svg";
import payme from "../Imgs/paynet.png";
import unio from "../Imgs/nova.png";
import study from "../Imgs/study.png";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Loyihalar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="Sarlavha">
        <h2 className={`Sarlavha-h2 ${theme}`}>Loyihalar</h2>
      </div>
      <div className="container3">
        <div className={`Loyiha-sarlavha ${theme}`}>
          <div className={`Loyiha-left ${theme}`}>
            <div className={`Loyiha-left-1line ${theme}`}>
              <p className="Loyiha-left-1line-p"></p>
              <h3 className={`Loyiha-left-1line-h3 ${theme}`}>
                Target, Kontekst <br /> reklama
              </h3>
            </div>
            <div className={`Loyiha-left-2line ${theme}`}>
              <img className="Loyiha-left-2line-img" src={vaqt} alt="" />
              <h5 className={`Loyiha-left-2line-h5 ${theme}`}>
                <span className={`Loyiha-left-2line-span ${theme}`}>
                  Xizmat davomiyligi:
                </span>
                2 yil
              </h5>
            </div>
            <div className={`Loyiha-left-3line ${theme}`}>
              <img className="Loyiha-left-3line-img" src={soat} alt="" />
              <h4 className={`Loyiha-left-3line-h4-box-1 ${theme}`}>
                <span className="Loyiha-left-3line-span">Tahlil:</span> Paynet
                O’zbekistonda pul o’tkazmalarini amalga oshiruvchi kompaniya
                hisoblanadi. Raqamli jamoasi va Paynet jamoasi bilan
                hamkorlikda, kompaniyaga target, kontekst reklama
                xizmatlarimizni taqdim etdik. Bu vaqt davomida Paynet
                kompaniyasining mobil ilovasini eng ko’p yuklangan mobil
                ilovalar o’rnidan joy olgan . Biz Paynet kompaniyasi kutgan
                natijalarni ko’rsatib bera oldik degan umiddamiz.
              </h4>
            </div>
          </div>
          <div className="Loyiha-right">
            <div className="Loyiha-right-line-1">
              <div className="Loyiha-right-line-2">
                <div className="Loyiha-right-line-3">
                  <img className="Loyiha-right-img" src={payme} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`Loyiha-sarlavha-box-2 ${theme}`}>
          <div className={`Loyiha-left-box-2 ${theme}`}>
            <div className={`Loyiha-left-1line-box-2 ${theme}`}>
              <p className="Loyiha-left-1line-p-box-2"></p>
              <h3 className={`Loyiha-left-1line-h3-box-2 ${theme}`}>
                Target, Kontekst <br /> reklama
              </h3>
            </div>
            <div className="Loyiha-left-2line-box-2">
              <img className="Loyiha-left-2line-img-box-2" src={vaqt} alt="" />
              <h5 className={`Loyiha-left-2line-h5-box-2 ${theme}`}>
                <span className="Loyiha-left-2line-span-box-2">
                  Xizmat davomiyligi:
                </span>
                8 oy
              </h5>
            </div>
            <div className="Loyiha-left-3line-box-2">
              <img className="Loyiha-left-3line-img-box-2" src={soat} alt="" />
              <h4 className={`Loyiha-left-3line-h4-box-2 ${theme}`}>
                <span className="Loyiha-left-3line-span-box-2">Tahlil:</span>{" "}
                Nova Stroy O'zbekistonda business-class uslubidagi uylar
                qurilish kompaniyasi hisoblanadi. Raqamli jamoasi va Nova Stroy
                jamoasi bilan hamkorlikda, kompaniyaga target, kontekst reklama
                xizmatlarimizni taqdim etdik. Bu vaqt davomida Nova Stroy
                kompaniyasining Parkwood uylari sotilgan. Biz Nova Stroy
                kompaniyasi kutgan natijalarni ko’rsatib bera oldik degan
                umiddamiz.
              </h4>
            </div>
          </div>
          <div className="Loyiha-right-box-2">
            <div className="Loyiha-right-line-1-box-2">
              <div className="Loyiha-right-line-2-box-2">
                <div className="Loyiha-right-line-3-box-2">
                  <img className="Loyiha-right-img-box-2" src={unio} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`Loyiha-sarlavha-box-3 ${theme}`}>
          <div className="Loyiha-left-box-3">
            <div className={`Loyiha-left-1line-box-3 ${theme}`}>
              <p className="Loyiha-left-1line-p-box-3"></p>
              <h3 className={`Loyiha-left-1line-h3-box-3 ${theme}`}>
                Target, Kontekst <br /> reklama
              </h3>
            </div>
            <div className="Loyiha-left-2line-box-3">
              <img className="Loyiha-left-2line-img-box-3" src={vaqt} alt="" />
              <h5 className={`Loyiha-left-2line-h5-box-3 ${theme}`}>
                <span className="Loyiha-left-2line-span-box-3">
                  Xizmat davomiyligi:
                </span>
                5 oy
              </h5>
            </div>
            <div className="Loyiha-left-3line-box-3">
              <img className="Loyiha-left-3line-img-box-3" src={soat} alt="" />
              <h4 className={`Loyiha-left-3line-h4-box-3 ${theme}`}>
                <span className="Loyiha-left-3line-span-box-3">Tahlil:</span>{" "}
                Union Study Russia O'zbekistonda abuturentlarni Rossiya va
                evropa mamlaktliriga oliy o’quv yurtlariga junatuvchi kompaniya
                hisoblanadi. Raqamli jamoasi va Union Study Russia jamoasi bilan
                hamkorlikda, kompaniyaga target, smm, kontekst reklama
                xizmatlarimizni taqdim etdik. Bu vaqt davomida Union Study
                Russia kompaniyasining 3000 oshiq abuturentlari oliy o’quv
                yurtlariga o’qishga qabul qilingan. Biz Union Study Russia
                kompaniyasi kutgan natijalarni ko’rsatib bera oldik degan
                umiddamiz.
              </h4>
            </div>
          </div>
          <div className="Loyiha-right-box-3">
            <div className="Loyiha-right-line-1-box-3">
              <div className="Loyiha-right-line-2-box-3">
                <div className="Loyiha-right-line-3-box-3">
                  <img className="Loyiha-right-img-box-3" src={study} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
