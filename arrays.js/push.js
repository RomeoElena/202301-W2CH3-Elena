import { length } from "./length";
export const push = (array, ...item) => {
  for (const count of item) {
    array[length(array)] = count;
  }

  return length(array);
};
