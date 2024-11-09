import Navbar from "../Imgs/LL.png";
import Light from "../ImgSvg/Light.svg";
import Strelka from "../ImgSvg/strelka.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="Navbar d-flex justify-content-between">
        <div className="Navbar-box-1">
          <img className="LL" src={Navbar} alt="" />
          <h3 className="R-Marketing">Raqamli Marketing</h3>
        </div>
        <div className="Navbar-box-2">
          <img className="Light" src={Light} alt="" />
          <div className="box-2-a">
            <img className="Strelka" src={Strelka} alt="" />
            <a className="a-Ariza" href="#">
              Ariza Yuborish
            </a>
          </div>
        </div>
      </div>
      <div className="Center-Header">
        <h1 className="Center-Header-h1">
          <span className="Center-Header-span">34 KUN</span>ICHIDA
          SAVDOLARINGIZNI <span className="Center-Header-span">70% GACHA</span>
          OSHIRING!
        </h1>
      </div>
      <div className="box-shadow d-flex justify-content-between">
        <div className="box"></div>
        <div className="box1"></div>
      </div>
    </div>
  );
}
