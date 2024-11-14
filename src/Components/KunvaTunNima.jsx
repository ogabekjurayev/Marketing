import Galichka from "../ImgSvg/boshqa galichka 2.svg";
import DigitalMarketing from "../Imgs/Digidalmarketing.png";
import Taget from "../Imgs/Target.png";
import Ityechimlari from "../Imgs/itbishlangich.png";
import Website from "../Imgs/Website.png";
import Google from "../Imgs/itreklama.png";

export default function KunvaTun() {
  return (
    <div>
      <div className="KunvaTun-1">
        <div className="BiznimaQilaolamiz-box-1">
          <div className="BiznimaQilaolamiz">
            <img className="BiznimaQilaolamiz-img" src={Galichka} alt="" />
            <h3 className="BiznimaQilaolamiz-h3">BIZ NIMALAR QILA OLAMIZ</h3>
          </div>
          <h2 className="BiznimaQilaolamiz-h2">
            6 YILDA BERI KUN U TUN NIMA QILAMIZ:
          </h2>
        </div>
        <div className="DigitalMarketing-box-2">
          <img className="DigitalMarketing-img" src={DigitalMarketing} alt="" />
          <h4 className="DigitalMarketing-h4">Digital Marketing</h4>
          <p className="DigitalMarketing-p">
            Ijtimoiy media, kontent va qidiruv tizimini optimallashtirish kabi
            keng qamrovli marketing strategiyalari bilan onlayn salohiyatingizni
            maksimal darajada oshirish.
          </p>
        </div>
        <div className="DigitalMarketing-box-2">
          <img className="DigitalMarketing-img" src={Taget} alt="" />
          <h4 className="DigitalMarketing-h4">Target</h4>
          <p className="DigitalMarketing-p-2">
            Maqsadli ijtimoiy media va qidiruv kampaniyalari bilan maqsadli
            auditoriyangizga erishing. Maqsadli reklama yordamida
            konversiyalarni oshiring.
          </p>
        </div>
      </div>
      <div className="KunvaTun-2">
        <div className="DigitalMarketing-box-2">
          <img className="DigitalMarketing-img" src={Ityechimlari} alt="" />
          <h4 className="DigitalMarketing-h4">IT yechimlari</h4>
          <p className="DigitalMarketing-p">
            Operatsiyalaringizni optimal-lashtirish uchun moslashtirilgan
            texnologik echimlar, jumladan, dasturiy ta'minot va bulutli
            texnologiyalar.
          </p>
        </div>
        <div className="DigitalMarketing-box-2">
          <img className="DigitalMarketing-img" src={Website} alt="" />
          <h4 className="DigitalMarketing-h4">Website</h4>
          <p className="DigitalMarketing-p">
            Korporativdan tortib onlayn-do'konlargacha kuchli onlayn mavjudlik
            uchun noyob va funktsional veb-saytlarni yarating.
          </p>
        </div>
        <div className="DigitalMarketing-box-2">
          <img className="DigitalMarketing-img-1" src={Google} alt="" />
          <h4 className="DigitalMarketing-h4">Google & Yandex Reklama</h4>
          <p className="DigitalMarketing-p">
            Maqsadli auditoriyangizni jalb qilib, samarali Google va Yandex
            kompaniyalar yordamida brendingizning ko'rinishini maksimal darajada
            oshiring.
          </p>
        </div>
      </div>
    </div>
  );
}
