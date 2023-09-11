import React, { useCallback } from "react";
import { BUTTONS } from "../../utils/constants";

import "./Button.scss";

interface IButtonProps {
  value: string;
  onClick: () => void;
  children?: React.ReactNode;
  styleClass?: string;
}

const className: Record<string, string> = {
  [BUTTONS.AC]: "button__wrapper--ac_mod",
  [BUTTONS.EQUALS]: "button__wrapper--equals_mod",
  [BUTTONS.MULTIPLICATION]: "button__wrapper--operation_mod",
  [BUTTONS.SUBTRACTION]: "button__wrapper--operation_mod",
  [BUTTONS.ADDITION]: "button__wrapper--operation_mod",
  [BUTTONS.DIVISION]: "button__wrapper--operation_mod",
  [BUTTONS.ZERO]: "button__wrapper--zero_mod",
};

const Button: React.FC<IButtonProps> = ({ value, onClick, children }) => {
  const getStyleName = useCallback((btn: string) => {
    return className[btn] || "";
  }, []);

  return (
    <div className={`button__wrapper ${getStyleName(value)}`} onClick={onClick}>
      <button className="button">{children || value}</button>
    </div>
  );
};

export default Button;
