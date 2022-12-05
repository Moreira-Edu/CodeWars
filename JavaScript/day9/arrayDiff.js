//kata ID 523f5d21c841566fde000009
// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

/**
 *
 * @param {number[]} a
 * @param {number[]} b
 */
export function arrayDiff(a, b) {
  const result = [];
  a.forEach((aNumber) => {
    b.find((bNumber) => bNumber === aNumber) === undefined &&
      result.push(aNumber);
  });

  return result;
}
