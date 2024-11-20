import { useState } from "react";
import dollor from "../ImgSvg/dolir.svg";
import strelkapast from "../ImgSvg/strelkapast.svg";
import foiz from "../ImgSvg/foiz.svg";
import Modal from "../Components/Modal";

export default function BuMuhim() {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

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
          <div>
            {/* <button className="Bumuhim-button">
              <img className="Bumuhim-img-4" src={signal} alt="" />
              <p className="Bumuhuim-p-2">Bosmang</p>
            </button> */}

            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              onClick={openModal}
              data-target="#exampleModalLong"
            >
              Launch demo modal
            </button>

            <Modal show={modalShow} onClose={closeModal} title="My Modal">
              <div>
                <div>123</div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
