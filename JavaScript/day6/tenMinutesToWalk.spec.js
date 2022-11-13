import { isValidWalk } from "./tenMinutesToWalk";

describe("isValidWalk", () => {
  it("should return true if walk last 10min and return to initial point", () => {
    expect(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBe(true);
  });

  it("should return false if walk last more or minus than 10min or dont return to initial point", () => {
    expect(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBe(false);
  });
});
