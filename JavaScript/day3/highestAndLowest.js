// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

export function highAndLow(numbers) {
  const max = Math.max(...numbers.split(" "));
  const min = Math.min(...numbers.split(" "));
  return `${max} ${min}`;
}
