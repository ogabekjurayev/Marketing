import paynet2 from "../Imgs/paynet2.png";
import chopar from "../Imgs/chopar.png";
import aylana360 from "../Imgs/360.png";
import nova from "../Imgs/nova2.png";
import imzo from "../Imgs/imzo.png";
import avlod21 from "../Imgs/21.png";
import lesailis from "../Imgs/ailes.png";
import sputnik from "../Imgs/sputnik.png";
import miraki from "../Imgs/miraki.png";
import etor from "../Imgs/etor.png";
import unio from "../Imgs/unionstudy.png";
import mahsulot from "../Imgs/mahsulot.png";

export default function Mijozlar() {
  return (
    <>
      <div className="BizningMijoz">
        <div className="Mijoz-h2-p">
          <h2 className="Mijoz-h2">Bizning Mijozlarimiz</h2>
          <p className="Mijoz-p">Bizga Ishonch bildirgan kompaniyalar</p>
        </div>
        <div className="Mijoz-center">
          <img src={paynet2} alt="" />
          <img src={chopar} alt="" />
          <img src={aylana360} alt="" />
          <img src={nova} alt="" />
        </div>
        <div className="Mijoz-center">
          <img src={imzo} alt="" />
          <img src={avlod21} alt="" />
          <img src={lesailis} alt="" />
          <img src={sputnik} alt="" />
        </div>
        <div className="Mijoz-center">
          <img src={miraki} alt="" />
          <img src={etor} alt="" />
          <img src={unio} alt="" />
          <img src={mahsulot} alt="" />
        </div>
      </div>
    </>
  );
}
