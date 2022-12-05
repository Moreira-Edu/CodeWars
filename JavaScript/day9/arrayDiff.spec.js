import { arrayDiff } from "./arrayDiff";

describe("describe array diff", () => {
  it("should remove all values from list a, wich are present in list b", () => {
    expect(arrayDiff([1, 2], [1])).toStrictEqual([2]);
    expect(arrayDiff([1, 2, 2, 2, 3], [2])).toStrictEqual([1, 3]);
    expect(arrayDiff([], [1, 2])).toStrictEqual([]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toStrictEqual([3]);
  });
});
