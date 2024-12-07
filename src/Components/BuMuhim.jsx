import dollor from "../ImgSvg/dolir.svg";
import strelkapast from "../ImgSvg/strelkapast.svg";
import foiz from "../ImgSvg/foiz.svg";
import "react-phone-input-2/lib/style.css";
import signal from "../ImgSvg/Signal.svg";

export default function BuMuhim() {
  return (
    <>
      <div className="Bumuhim-line">
        <div className="Bumuhim-bg">
          <div className="Bumuhim-h2-p">
            <h2 className="Bumuhim-h2">Bu muhim!</h2>
            <p className="Bumuhim-p">
              Aslo pasdagi tugmani bosmang <strong>savdolaringiz</strong> <br />{" "}
              katta hajimda <strong>oshib ketish</strong> ehtimoli bor
            </p>
          </div>
          <div className="Bumuhim-imgs">
            <img className="Bumuhim-img-1" src={dollor} alt="" />
            <img className="Bumuhim-img-2" src={strelkapast} alt="" />
            <img className="Bumuhim-img-3" src={foiz} alt="" />
          </div>
          <div className="Bumuhum-button-allbig">
            <a
              className="Bumuhim-button"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeho1cvyzbBl8GeDnYkvPYbJTeYHOORTuLr6SHCyvRTbTnXYw/viewform?usp=sf_link"
            >
              <img className="Bumuhim-img-4" src={signal} alt="" />
              <p className="Bumuhuim-p-2">Bosmang</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
