import { isValidIP } from "./IPValidation";

describe("IPValidation", () => {
  it("should be valid IP", () => {
    expect(isValidIP("1.2.3.4")).toBe(true);
    expect(isValidIP("123.45.67.89")).toBe(true);
  });

  it("should be invalid IP", () => {
    expect(isValidIP("123.045.067.089")).toBe(false);
    expect(isValidIP("123.456.78.90")).toBe(false);
    expect(isValidIP("1.2.3.4.5")).toBe(false);
  });
});
