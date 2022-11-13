import { isValidWalk } from "./tenMinutesToWalk";

describe("isValidWalk", () => {
  it("should return true if walk last 10min and return to initial point", () => {
    expect(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBe(true);
  });

  it("should return false if walk dont return to initial point", () => {
    expect(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBe(false);
  });

  it("should return false if walk last more or less than 10min", () => {
    expect(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
    ).toBe(false);

    expect(isValidWalk(["w"])).toBe(false);
  });
});
