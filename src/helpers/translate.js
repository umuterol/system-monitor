import { decode } from "morse";

export const morseToIng = (text) => {
  return decode(text);
};
