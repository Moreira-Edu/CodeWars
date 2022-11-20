//kataID 54b724efac3d5402db00065e

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

/**
 *
 * @param {string} morseCode
 * @returns {string}
 */
export function decodeMorse(morseCode) {
  const decoder = {
    A: /(?<=[^\.|-]|^)(\.-)(?=[^\.|-]|$)/g,
    B: /(?<=[^\.|-]|^)(-\.\.\.)(?=[^\.|-]|$)/g,
    C: /(?<=[^\.|-]|^)(-\.-\.)(?=[^\.|-]|$)/g,
    D: /(?<=[^\.|-]|^)(-\.\.)(?=[^\.|-]|$)/g,
    E: /(?<=[^\.|-]|^)(\.)(?=[^\.|-]|$)/g,
    F: /(?<=[^\.|-]|^)(\.\.-\.)(?=[^\.|-]|$)/g,
    G: /(?<=[^\.|-]|^)(--\.)(?=[^\.|-]|$)/g,
    H: /(?<=[^\.|-]|^)(\.\.\.\.)(?=[^\.|-]|$)/g,
    I: /(?<=[^\.|-]|^)(\.\.)(?=[^\.|-]|$)/g,
    J: /(?<=[^\.|-]|^)(\.---)(?=[^\.|-]|$)/g,
    K: /(?<=[^\.|-]|^)(-\.-)(?=[^\.|-]|$)/g,
    L: /(?<=[^\.|-]|^)(\.-\.\.)(?=[^\.|-]|$)/g,
    M: /(?<=[^\.|-]|^)(--)(?=[^\.|-]|$)/g,
    N: /(?<=[^\.|-]|^)(-\.)(?=[^\.|-]|$)/g,
    O: /(?<=[^\.|-]|^)(---)(?=[^\.|-]|$)/g,
    P: /(?<=[^\.|-]|^)(\.--\.)(?=[^\.|-]|$)/g,
    Q: /(?<=[^\.|-]|^)(--\.-)(?=[^\.|-]|$)/g,
    R: /(?<=[^\.|-]|^)(\.-\.)(?=[^\.|-]|$)/g,
    S: /(?<=[^\.|-]|^)(\.\.\.)(?=[^\.|-]|$)/g,
    T: /(?<=[^\.|-]|^)(-)(?=[^\.|-]|$)/g,
    U: /(?<=[^\.|-]|^)(\.\.-)(?=[^\.|-]|$)/g,
    V: /(?<=[^\.|-]|^)(\.\.\.-)(?=[^\.|-]|$)/g,
    W: /(?<=[^\.|-]|^)(\.--)(?=[^\.|-]|$)/g,
    X: /(?<=[^\.|-]|^)(-\.\.-)(?=[^\.|-]|$)/g,
    Y: /(?<=[^\.|-]|^)(-\.--)(?=[^\.|-]|$)/g,
    Z: /(?<=[^\.|-]|^)(--\.\.)(?=[^\.|-]|$)/g,
    1: /(?<=[^\.|-]|^)(\.----)(?=[^\.|-]|$)/g,
    2: /(?<=[^\.|-]|^)(\.\.---)(?=[^\.|-]|$)/g,
    3: /(?<=[^\.|-]|^)(\.\.\.--)(?=[^\.|-]|$)/g,
    4: /(?<=[^\.|-]|^)(\.\.\.\.-)(?=[^\.|-]|$)/g,
    5: /(?<=[^\.|-]|^)(\.\.\.\.\.)(?=[^\.|-]|$)/g,
    6: /(?<=[^\.|-]|^)(-\.\.\.\.)(?=[^\.|-]|$)/g,
    7: /(?<=[^\.|-]|^)(--\.\.\.)(?=[^\.|-]|$)/g,
    8: /(?<=[^\.|-]|^)(---\.\.)(?=[^\.|-]|$)/g,
    9: /(?<=[^\.|-]|^)(----\.)(?=[^\.|-]|$)/g,
    0: /(?<=[^\.|-]|^)(-----)(?=[^\.|-]|$)/g,
    SOS: /(?<=[^\.|-]|^)(\.\.\.---\.\.\.)(?=[^\.|-]|$)/g,
    "!": /(?<=[^\.|-]|^)(-\.-\.--)(?=[^\.|-]|$)/g,
    ".": /(?<=[^\.|-]|^)(\.-\.-\.-)(?=[^\.|-]|$)/g,
  };
  const singleSpace = /(?<=^|[^\s])(\s)(?=[^\s]|$)/g;
  const multipleSpace = /\s{3}/g;
  const borderMultipleSpace = /^\s{2,9}|\s{2,9}$/g;

  Object.entries(decoder).forEach(([word, code]) => {
    morseCode = morseCode.replace(code, word);
  });

  morseCode = morseCode
    .replace(singleSpace, "")
    .replace(borderMultipleSpace, "")
    .replace(multipleSpace, " ");

  return morseCode;
}
