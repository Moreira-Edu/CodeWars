export const isSquare = function (n) {
  if (n < 0) return false;
  const root = Math.sqrt(n);
  const isSquare = Number.isInteger(root);
  return isSquare;
};
