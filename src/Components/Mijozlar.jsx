import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useMediaQuery } from "react-responsive";
import MobilniMijozlar from "./MobilniMijozlar";
import BottomMijozlar from "./BottomMijozlar";

export default function Mijozlar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);

  const isMobile = useMediaQuery({ query: "(max-width: 437px)" });
  return (
    <>
      <div className={`BizningMijoz ${theme}`}>
        <div className="Mijoz-h2-p">
          <h2 className={`Mijoz-h2 ${theme}`}>Bizning Mijozlarimiz</h2>
          <p className={`Mijoz-p ${theme}`}>
            Bizga Ishonch bildirgan kompaniyalar
          </p>
        </div>
        <div>{isMobile ? <MobilniMijozlar /> : <BottomMijozlar />}</div>
      </div>
    </>
  );
}
