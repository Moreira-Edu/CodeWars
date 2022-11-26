//kata ID 515decfd9dcfc23bb6000006

// Write an algorithm that will identify valid IPv4 addresses in
// dot-decimal format. IPs should be considered valid if they consist of four octets,
// with values between 0 and 255, inclusive.

/**
 *
 * @param {string} str
 * @returns
 */
export function isValidIP(str) {
  const ipRegex =
    /(\b0\.?\b|\b2[5][0-5]\.?\b|\b2[0-4][0-9]\.?\b|\b1[0-9][0-9]\.?\b|\b[1-9][0-9]\.?\b|\b[1-9]\.?\b){4}/g;

  return str.match(ipRegex)?.join("") === str;
}
