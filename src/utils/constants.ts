import { IDigit, IOperator } from "./types";

export const BUTTONS: Record<string, IOperator | IDigit> = {
  AC: "AC",
  ADDITION: "+",
  SUBTRACTION: "−",
  MULTIPLICATION: "×",
  DIVISION: "÷",
  COMMA: ",",
  DOT: ".",
  EQUALS: "=",
  ZERO: 0,
};

export const CALC_BUTTONS: (IOperator | IDigit)[][] = [
  [BUTTONS.AC, BUTTONS.DIVISION],
  [7, 8, 9, BUTTONS.MULTIPLICATION],
  [4, 5, 6, BUTTONS.SUBTRACTION],
  [1, 2, 3, BUTTONS.ADDITION],
  [BUTTONS.ZERO, BUTTONS.COMMA, BUTTONS.EQUALS],
];
