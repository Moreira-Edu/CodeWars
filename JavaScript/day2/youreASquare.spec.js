import { isSquare } from "./youreASquare";

describe("Youre a square", () => {
  it("should determine if number its a perfect square", () => {
    expect(isSquare(25)).toBe(true);
    expect(isSquare(86)).toBe(false);
    expect(isSquare(-2)).toBe(false);
  });
});
