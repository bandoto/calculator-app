import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { setEquals } from "../../redux/calcSlice";
import { adaptTextSize } from "../../libs/adaptiveTextSize";
import { changeDotToComma } from "../../libs/changeDotToComma";

import "./CalcScreen.scss";

export const CalcScreen: React.FC = () => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const calc = useAppSelector((state) => state.calc);

  const { firstNumber, secondNumber, operation, result } = calc;

  const blockRefFirstNumber = useRef<HTMLDivElement | null>(null);
  const textRefFirstNumber = useRef<HTMLSpanElement | null>(null);
  const blockRefResult = useRef<HTMLDivElement | null>(null);
  const textRefResult = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const isInputValid = firstNumber !== "" && secondNumber !== "" && operation;

    if (isInputValid) {
      dispatch(setEquals());
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [firstNumber, secondNumber, operation, dispatch]);

  useEffect(() => {
    if (firstNumber || secondNumber || operation || result) {
      adaptTextSize(blockRefFirstNumber, textRefFirstNumber);
      adaptTextSize(blockRefResult, textRefResult);
    } else {
      if (textRefFirstNumber.current) {
        textRefFirstNumber.current.style.fontSize = "100%";
      }
      if (textRefResult.current) {
        textRefResult.current.style.fontSize = "100%";
      }
    }
  }, [firstNumber, secondNumber, operation, result, showResult]);

  const formattedFirstNumber =
    firstNumber !== null
      ? firstNumber === "0"
        ? "0"
        : changeDotToComma(firstNumber)
      : "";

  const formattedSecondNumber =
    secondNumber !== null
      ? secondNumber === "0"
        ? "0"
        : changeDotToComma(secondNumber)
      : "";

  const formattedResult =
    showResult && result !== null
      ? result === 0
        ? "0"
        : changeDotToComma(result.toString())
      : "";

  return (
    <div className="calc__screen">
      <div className="calc__question" ref={blockRefFirstNumber}>
        <span ref={textRefFirstNumber}>
          {formattedFirstNumber}
          {operation}
          {formattedSecondNumber}
        </span>
      </div>
      <div className="calc__answer" ref={blockRefResult}>
        <span ref={textRefResult}>{formattedResult}</span>
      </div>
    </div>
  );
};
