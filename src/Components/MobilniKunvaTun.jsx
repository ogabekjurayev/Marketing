import DigitalMarketing from "../Imgs/Digidalmarketing.png";
import Taget from "../Imgs/Target.png";
import Ityechimlari from "../Imgs/itbishlangich.png";
import Website from "../Imgs/Website.png";
import Google from "../Imgs/itreklama.png";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function MobilniKunvaTun() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="Mobilni-DigitalMarketing ">
        <div className={`Mobilni-DigitalMarketing-box-1 ${theme}`}>
          <img
            className="Mobilni-DigitalMarketing-box-1-img"
            src={DigitalMarketing}
            alt=""
          />
          <h4 className={`Mobilni-DigitalMarketing-box-1-h4 ${theme}`}>
            Kompleks <br /> marketing
          </h4>
          <p className={`Mobilni-DigitalMarketing-box-1-p ${theme}`}>
            Biznesingiz o‘sishini ta'minlash uchun barcha marketing vositalarini
            birlashtiramiz: strategik rejalashtirish, reklama kampaniyalari, SMM
            va boshqa samarali usullar.
          </p>
        </div>
        <div className={`Mobilni-DigitalMarketing-box-2 ${theme}`}>
          <img
            className="Mobilni-DigitalMarketing-box-2-img"
            src={Taget}
            alt=""
          />
          <h4 className={`Mobilni-DigitalMarketing-box-2-h4 ${theme}`}>
            Performance <br /> marketing
          </h4>
          <p className={`Mobilni-DigitalMarketing-box-2-p ${theme}`}>
            Natija keltiradigan reklama kampaniyalari! Biz faqat maqsadli
            auditoriyani jalb qilish va sotuvlarni oshirishga qaratilgan
            yechimlarni taqdim etamiz.
          </p>
        </div>
        <div className={`Mobilni-DigitalMarketing-box-3 ${theme}`}>
          <img
            className="Mobilni-DigitalMarketing-box-3-img"
            src={Google}
            alt=""
          />
          <h4 className={`Mobilni-DigitalMarketing-box-3-h4 ${theme}`}>
            Google & Yandex <br /> Reklama
          </h4>
          <p className={`Mobilni-DigitalMarketing-box-3-p ${theme}`}>
            Qidiruv tizimlarida birinchi o‘rinda bo‘ling! Google va Yandex
            platformalarida yuqori ROI keltiradigan reklama kampaniyalarini
            yaratamiz.
          </p>
        </div>
        <div className={`Mobilni-DigitalMarketing-box-4 ${theme}`}>
          <img
            className="Mobilni-DigitalMarketing-box-4-img"
            src={Website}
            alt=""
          />
          <h4 className={`Mobilni-DigitalMarketing-box-4-h4 ${theme}`}>
            IT yechimlar va avtomatizatsiya
          </h4>
          <p className={`Mobilni-DigitalMarketing-box-4-p ${theme}`}>
            Biznes jarayonlaringizni soddalashtiruvchi va samaradorlikni
            oshiruvchi IT yechimlar va avtomatizatsiya tizimlarini joriy
            qilamiz.
          </p>
        </div>
        <div className={`Mobilni-DigitalMarketing-box-5 ${theme}`}>
          <img
            className="Mobilni-DigitalMarketing-box-5-img"
            src={Ityechimlari}
            alt=""
          />
          <h4 className={`Mobilni-DigitalMarketing-box-5-h4 ${theme}`}>SMM</h4>
          <p className={`Mobilni-DigitalMarketing-box-5-p ${theme}`}>
            Ijtimoiy tarmoqlarda brendingizni rivojlantiramiz! Yaratilgan
            kontent va to‘g‘ri strategiya yordamida auditoriyangizni jalb
            qilamiz va faolligini oshiramiz.
          </p>
        </div>
      </div>
    </>
  );
}
