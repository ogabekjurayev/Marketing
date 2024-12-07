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

export default function MobilniMijozlar() {
  return (
    <div className="All-Mobilni-Mijozlar">
      <div className="MobilniMijozlar-box-1">
        <div>
          <img className="MobilniMijozlar-box-1-img" src={paynet2} alt="" />
        </div>
        <div>
          {" "}
          <img className="MobilniMijozlar-box-1-img" src={chopar} alt="" />
        </div>
      </div>
      <div className="MobilniMijozlar-box-2">
        <div>
          <img className="MobilniMijozlar-box-1-img" src={aylana360} alt="" />
        </div>
        <div>
          <img className="MobilniMijozlar-box-1-img" src={nova} alt="" />
        </div>
      </div>
      <div className="MobilniMijozlar-box-3">
        <div>
          <img className="MobilniMijozlar-box-1-img" src={imzo} alt="" />
        </div>
        <div>
          <img className="MobilniMijozlar-box-1-img" src={avlod21} alt="" />
        </div>
      </div>
      <div className="MobilniMijozlar-box-4">
        <div>
          <img className="MobilniMijozlar-box-1-img" src={lesailis} alt="" />
        </div>
        <div>
          <img className="MobilniMijozlar-box-1-img" src={sputnik} alt="" />
        </div>
      </div>
      <div className="MobilniMijozlar-box-5">
        <div>
          <img className="MobilniMijozlar-box-1-img" src={miraki} alt="" />
        </div>
        <div>
          <img className="MobilniMijozlar-box-1-img" src={etor} alt="" />
        </div>
      </div>
      <div className="MobilniMijozlar-box-6">
        <div>
          <img className="MobilniMijozlar-box-1-img" src={unio} alt="" />
        </div>
        <div>
          <img className="MobilniMijozlar-box-1-img" src={mahsulot} alt="" />
        </div>
      </div>
    </div>
  );
}
