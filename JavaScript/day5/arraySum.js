// kata-id 54521e9ec8e60bc4de000d6c
// The maximum sum subarray problem consists
// in finding the maximum sum of a contiguous subsequence in
// an array or list of integers.
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

/**
 *
 * @param {[number]} arr
 *
 */
export function maxSequence(arr) {
  let currentSum = 0;
  let maxSum = 0;

  if (arr.length === 0) {
    return 0;
  }

  arr.forEach((number) => {
    currentSum = Math.max(number, currentSum + number);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
}
