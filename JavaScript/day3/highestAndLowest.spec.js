import { highAndLow } from "./highestAndLowest";

describe("Highest and lowest", () => {
  const input = "1 2 3 4 5";
  const result = "5 1";

  it("should return the highest and lowest numbers of input", () => {
    expect(highAndLow(input)).toBe(result);
  });

  it("should return first the max number", () => {
    const result = highAndLow(input);
    expect(result[0] > result[1]).toBe(true);
  });
});
