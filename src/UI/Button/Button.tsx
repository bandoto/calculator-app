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
  [BUTTONS.AC]: "button--ac_mod",
  [BUTTONS.EQUALS]: "button--equals_mod",
  [BUTTONS.MULTIPLICATION]: "button--operation_mod",
  [BUTTONS.SUBTRACTION]: "button--operation_mod",
  [BUTTONS.ADDITION]: "button--operation_mod",
  [BUTTONS.DIVISION]: "button--operation_mod",
  [BUTTONS.ZERO]: "button--zero_mod",
};

const Button: React.FC<IButtonProps> = ({ value, onClick, children }) => {
  const getStyleName = useCallback((btn: string) => {
    return className[btn] || "";
  }, []);

  return (
    <button className={`button ${getStyleName(value)}`} onClick={onClick}>
      {children || value}
    </button>
  );
};

export default Button;
