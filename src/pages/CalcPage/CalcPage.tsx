import React from "react";
import { CalcButtonsBox, CalcScreen } from "../../modules/Calculator";

import "./CalcPage.scss";

const CalcPage: React.FC = () => {
  return (
    <section className="calc">
      <CalcScreen />
      <CalcButtonsBox />
    </section>
  );
};

export default CalcPage;
