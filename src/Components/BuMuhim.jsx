import { useState } from "react";
import signal from "../ImgSvg/Signal.svg";
import dollor from "../ImgSvg/dolir.svg";
import strelkapast from "../ImgSvg/strelkapast.svg";
import foiz from "../ImgSvg/foiz.svg";
import Modal from "../Components/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function BuMuhim() {
  // Modal state
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  // Phone state
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const handleChange = (valid) => {
    setPhoneNumber(valid);
    setValid(validatePhoneNumber(valid));
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

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
              className="Bumuhim-button"
              data-toggle="modal"
              onClick={openModal}
              data-target="#exampleModalLong"
            >
              <img className="Bumuhim-img-4" src={signal} alt="" />
              <p className="Bumuhuim-p-2">Bosmang</p>
            </button>

            <Modal show={modalShow} onClose={closeModal} title="My Modal">
              <>
                <h2 className="Modal-Sarlavha">Bosdingizmi-Demak:</h2>
                <div className="Reja">
                  <p className="Reja-p1">
                    1.Hozirgi savdo hajmi sizni qoniqtirmayapti
                  </p>
                  <p className="Reja-p2">
                    2. Hozirgi reklamaga sarflanayotgan pul o’zini qoplamayapti
                  </p>
                  <p className="Reja-p3">
                    3. Reklamaga pul ko’paytirayapsiz lekin savdo hajmi
                    ko’paymayapti
                  </p>
                  <p className="Reja-p4">
                    4. Sizning Businessingiz taniqliligi sizni qoniqtirmayapti
                    ...
                  </p>
                </div>
                <div className="Matn">
                  Bu ro’yxatni juda uzoq davom ettirsak bo’ladi! Agar tepada
                  sanab o’tilgan va ularga o’xshagan muammolar bo’lsa Yechim
                  sababchisi bo’lishga tayyormiz!
                </div>
                <div className="Inputs">
                  <form>
                    <input
                      className="Input-ism"
                      type="text"
                      placeholder="Ismingiz"
                    />
                  </form>
                  <label>
                    <PhoneInput
                      country={"uz"}
                      value={PhoneNumber}
                      onChange={handleChange}
                      inputProps={{
                        required: true,
                      }}
                    />
                  </label>
                  <input
                    className="Input-ism"
                    type="text"
                    placeholder="Biznesingiz turi"
                  />{" "}
                  <input
                    className="Input-ism-pas"
                    type="text"
                    placeholder="Biznesingiz Instagram sahifasi "
                  />
                </div>
                <div className="SavolvaRadiolar">
                  <div className="Radio-1">
                    <h5 className="Savol-h5">
                      Avval qaysi Digital instrumentlardan foydalangansiz?
                    </h5>
                    <div className="form-check">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Facebook ads</p>
                    </div>
                    <div className="form-check d-flex">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Google ads</p>
                    </div>
                    <div className="form-check d-flex">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">SMM</p>
                    </div>
                    <div className="form-check d-flex">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Google ads</p>
                    </div>
                  </div>
                  <div className="Radio-2">
                    <h5 className="Savol-h5-2">
                      Marketing budjetingiz 500$ dan yuqorimi?
                    </h5>
                    <p className="Belgi-p">
                      Bizning xizmatlarimiz 500$ dan boshlanadi agar sizning
                      byudjetingiz 500$ kam bo’lsa siz bilan hozircha ishlay
                      olmaymiz
                    </p>
                    <div className="form-check">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Ha</p>
                    </div>
                    <div className="form-check ">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Yo'q</p>
                    </div>
                  </div>
                  <div className="Radio-3">
                    <h5 className="Savol-h5-3">
                      Kompaniyada qanday vazifada faoliyat olib borasiz?
                    </h5>
                    <div className="form-check">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Asoschi</p>
                    </div>
                    <div className="form-check d-flex">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Boshqaruvchi</p>
                    </div>
                    <div className="form-check d-flex">
                      <label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault1"
                        ></input>
                      </label>
                      <p className="input-p">Marketolog</p>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <button className="btn-ariza">ARIZA YUBORISH</button>
                  <p className="btn-p">Hoziroq biz bilan bog'laning</p>
                </div>
              </>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
