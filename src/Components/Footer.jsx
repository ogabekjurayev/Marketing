import instagram from "../ImgSvg/instagram.svg";
import tel from "../ImgSvg/Phone_1.svg";
import sms from "../ImgSvg/Mail.svg";

export default function Footer() {
  return (
    <>
      <div className="Footer-all">
        <div className="RaqamliMCHJ">"Raqamli" MCHJ</div>
        <div className="Instagramgroup">
          <a
            className="Instageam-a"
            href="https://www.instagram.com/raqamli.marketing/"
          >
            <img className="Instagram-img" src={instagram} alt="/" />
            <p className="Instagram-p">Instagram</p>
          </a>
        </div>
        <div className="Telgroup-SmSgroup ">
          <div className="tel-all">
            <a className="Telgroup-a " href="tel:998333303930">
              <img className="Telgroup" src={tel} alt="" />
              <p className="Telgroup-p">+998 33 330 39 30</p>
            </a>
          </div>

          <div className="sms-all">
            <a className="Sms-a" href="mailto:raqamli.marketing@gmail.com">
              <img className="Sms-img" src={sms} alt="/" />
              <p className="Sms-p">raqamli.marketing@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
