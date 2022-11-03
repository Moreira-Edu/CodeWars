import { toCamelCase } from "./toCamelCase";

describe("to camelCase function", () => {
  const input1 = "the-stealth-warrior";
  const input2 = "The_Stealth_Warrior";
  const input3 = "A-B-C";
  const result1 = "theStealthWarrior";
  const result2 = "TheStealthWarrior";
  const result3 = "ABC";

  it("should convert dash/nderscore delimited words to camelCase", () => {
    expect(toCamelCase(input1)).toBe(result1);
    expect(toCamelCase(input2)).toBe(result2);
  });

  it("should return a empty string if input is empty", () => {
    expect(toCamelCase("")).toBe("");
  });

  it("should return first word captalized only if it was captlized before", () => {
    expect(toCamelCase(input3)).toBe(result3);
  });
});
