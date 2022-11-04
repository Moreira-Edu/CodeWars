import { maxSequence } from "./arraySum";

describe("arraySum", () => {
  it("should return a sum of whole array", () => {
    const input = [2, 1, 3, 4, 1, 2, 1, 5, 4];
    const result = 23;
    expect(maxSequence(input)).toBe(result);
  });

  it("should return a sum of subarray", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = 6;
    expect(maxSequence(input)).toBe(result);
  });

  it("should return 0 if the list is made up of only negative numbers", () => {
    const input = [-4, -5, -9, -10];
    const result = 0;
    expect(maxSequence(input)).toBe(result);
  });

  it("should return 0 if the array are empty", () => {
    const input = [];
    const result = 0;
    expect(maxSequence(input)).toBe(result);
  });
});
