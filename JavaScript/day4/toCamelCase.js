// kata-id 517abf86da9663f1d2000003
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

export function toCamelCase(str) {
  const toCapitalize = /([-_])((?:(?<=[-_])\w))/gi;
  return str.replace(toCapitalize, ($0, $1, $2) => $2.toUpperCase());
}
