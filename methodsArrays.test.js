import { length } from "./arrays.js/length";
import { push } from "./arrays.js/push";

describe("Give the length funtion", () => {
  describe("When we give an array", () => {
    test("Then it must return the number of ", () => {
      const array = ["Jhon", "Paul", "Ringo"];
      const show = length(array);
      const result = 3;
      expect(show).toBe(result);
    });
  });
});

describe("Give push function", () => {
  describe("When we add one more", () => {
    test("Then it must return the length array plus the new one", () => {
      const array = ["Jhon", "Paul", "Ringo"];
      const show = push(array);
      const result = 4;
      expect(show).toEqual(result);
    });
  });
});
