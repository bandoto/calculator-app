import React from "react";
import { CalcButtonsBox, CalcScreen } from "../../modules/Calculator";

import "./CalcPage.scss";

const CalcPage: React.FC = () => {
  return (
    <section className="calc">
      <div className="calc__body">
        <CalcScreen />
        <CalcButtonsBox />
      </div>
    </section>
  );
};

export default CalcPage;
