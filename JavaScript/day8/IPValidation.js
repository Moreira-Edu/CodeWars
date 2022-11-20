/**
 *
 * @param {string} str
 * @returns
 */
export function isValidIP(str) {
  const ipRegex =
    /(\b0(?=[^\d])\.?\b|\b2[5][0-5]\.?\b|\b2[1-4][0-9]\.?\b|\b1[0-9][0-9]\.?\b|\b[1-9][0-9]\.?\b|\b[1-9]\.?\b){4}/g;
  return str.match(ipRegex)?.join("") === str;
}
