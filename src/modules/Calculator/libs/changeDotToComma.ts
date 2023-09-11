import { BUTTONS } from "../../../utils/constants";

export const changeDotToComma = (num: string): string => {
  const numToString = String(num);

  return numToString.replace(BUTTONS.DOT as string, BUTTONS.COMMA as string);
};
