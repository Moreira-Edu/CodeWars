import { disemvowel } from "./disenvowel_trolls.js";

describe("disenvowel trolls", () => {
  it("should take a string and return a new string with all vowels removed", () => {
    expect(disemvowel("This website is for losers LOL!")).toBe(
      "Ths wbst s fr lsrs LL!"
    );
  });

  it("should ignore y as a vowel", () => {
    expect(disemvowel("Your website is for losers LOL!")).toBe(
      "Yr wbst s fr lsrs LL!"
    );
  });
});
