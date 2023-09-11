import React from "react";
import { CalcButton } from "../CalcButton/CalcButton";
import { CALC_BUTTONS } from "../../../../utils/constants";
import { useAppSelector } from "../../../../hooks/redux-hooks";

import "./CalcButtonsBox.scss";

export const CalcButtonsBox: React.FC = () => {
  const calc = useAppSelector((state) => state.calc);

  return (
    <div className="calc__wrapper">
      {CALC_BUTTONS.flat().map((btn) => (
        <CalcButton value={btn} key={btn} state={calc} />
      ))}
    </div>
  );
};
