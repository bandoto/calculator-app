import React, { useCallback, useEffect } from "react";
import Button from "../../../../UI/Button/Button";
import { BUTTONS } from "../../../../utils/constants";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import {
  clickAC,
  clickComma,
  clickEquals,
  clickNumber,
  clickOperation,
} from "../../redux/calcSlice";
import { IDot, IDigit, IOperator } from "../../../../utils/types";

interface ICalcButtonProps {
  value: IDigit | IOperator;
  state: any;
}

export const CalcButton: React.FC<ICalcButtonProps> = ({ value, state }) => {
  console.log("rerender CalcButton");
  const dispatch = useAppDispatch();

  const handleNumberClick = useCallback(() => {
    if (typeof value === "number" && value >= 0 && value <= 9) {
      const numberValue = Number(state.currentNumber.toString() + value);

      dispatch(clickNumber(numberValue.toString()));
    }
  }, [value, state.currentNumber, dispatch]);

  const handleBtnClick = useCallback(() => {
    switch (value) {
      case BUTTONS.COMMA:
        dispatch(clickComma(BUTTONS.DOT as IDot));
        break;
      case BUTTONS.ADDITION:
      case BUTTONS.SUBTRACTION:
      case BUTTONS.MULTIPLICATION:
      case BUTTONS.DIVISION:
        dispatch(clickOperation(value as IOperator));
        break;
      case BUTTONS.EQUALS:
        dispatch(clickEquals());
        break;
      case BUTTONS.AC:
        dispatch(clickAC());
        break;
      default:
        handleNumberClick();
    }
  }, [value, handleNumberClick, dispatch]);

  const handleKeyPress = (event: KeyboardEvent) => {
    const keyMappings: { [key: string]: () => void } = {
      Enter: () => dispatch(clickEquals()),
      Escape: () => dispatch(clickAC()),
      "/": () => dispatch(clickOperation(BUTTONS.DIVISION as IOperator)),
      "*": () => dispatch(clickOperation(BUTTONS.MULTIPLICATION as IOperator)),
      "-": () => dispatch(clickOperation(BUTTONS.SUBTRACTION as IOperator)),
      ".": () => dispatch(clickComma(BUTTONS.DOT as IDot)),
      [String(value)]: handleBtnClick,
    };

    const action = keyMappings[event.key];
    if (action) {
      action();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [value, handleBtnClick, dispatch]);

  return (
    <Button value={String(value)} onClick={handleBtnClick}>
      {value}
    </Button>
  );
};
