import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BUTTONS } from "../../../utils/constants";
import { IDot, IOperator } from "../../../utils/types";

interface ICalcState {
  operation: IOperator | null;
  currentNumber: string;
  firstNumber: string;
  secondNumber: string;
  result: number;
}

const initialState: ICalcState = {
  operation: null,
  currentNumber: "0",
  firstNumber: "",
  secondNumber: "",
  result: 0,
};

const mathOperations = {
  [BUTTONS.ADDITION]: (a: number, b: number) => a + b,
  [BUTTONS.SUBTRACTION]: (a: number, b: number) => a - b,
  [BUTTONS.MULTIPLICATION]: (a: number, b: number) => a * b,
  [BUTTONS.DIVISION]: (a: number, b: number) => a / b,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    clickNumber: (state, action: PayloadAction<string>) => {
      state.currentNumber = action.payload;

      if (!state.operation) {
        state.firstNumber = state.currentNumber;
      } else {
        state.secondNumber = state.currentNumber;
      }
    },
    clickComma: (state, action: PayloadAction<IDot>) => {
      if (!state.currentNumber.includes(BUTTONS.DOT as string)) {
        state.currentNumber += action.payload;
      }

      if (!state.operation) {
        state.firstNumber = state.currentNumber;
      } else {
        state.secondNumber = state.currentNumber;
      }
    },
    clickOperation: (state, action: PayloadAction<IOperator>) => {
      const lastChar = state.firstNumber.slice(-1);

      if (lastChar === BUTTONS.DOT) {
        state.firstNumber = state.firstNumber.slice(0, -1);
      }

      if (state.operation !== action.payload) {
        state.operation = action.payload;

        if (state.result) {
          state.firstNumber = state.result.toString();
          state.secondNumber = "";
          state.result = 0;
        }

        state.currentNumber = "0";
      }
    },
    clickEquals: (state) => {
      const lastChar = state.currentNumber.slice(-1);

      const lastCharIsNotPeriod = lastChar !== BUTTONS.DOT;

      if (state.operation && state.secondNumber && lastCharIsNotPeriod) {
        state.currentNumber = state.result.toString();
        state.firstNumber = state.result.toString();
        state.secondNumber = "";
        state.operation = null;
        state.result = 0;
      }
    },
    setEquals: (state) => {
      if (state.operation) {
        const a = Number(state.firstNumber);
        const b = Number(state.secondNumber);

        const operation = state.operation as IOperator;
        const result = mathOperations[operation](a, b);

        state.result = Number(result.toFixed(5));
      }
    },
    clickAC: (state) => {
      state.currentNumber = "0";
      state.firstNumber = "";
      state.secondNumber = "";
      state.operation = null;
      state.result = 0;
    },
  },
});

export const {
  clickNumber,
  clickComma,
  clickEquals,
  clickOperation,
  clickAC,
  setEquals,
} = calcSlice.actions;

export default calcSlice.reducer;
