import React from "react";
import { CalcButton } from "../CalcButton/CalcButton";
import { CALC_BUTTONS } from "../../../../utils/constants";

import "./CalcButtonsBox.scss";

export const CalcButtonsBox: React.FC = () => {
  return (
    <div className="calc__wrapper">
      {CALC_BUTTONS.flat().map((btn) => (
        <CalcButton value={btn} key={btn} />
      ))}
    </div>
  );
};
