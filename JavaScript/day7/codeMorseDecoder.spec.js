import { decodeMorse } from "./codeMorseDecoder";

describe("code morse decoder", () => {
  it("should decode a phrase", () => {
    expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
  });

  it("should decode a word", () => {
    expect(decodeMorse("   .... . -.--   ")).toBe("HEY");
  });
});
