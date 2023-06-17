import { groupArrayElements } from "./groupArrayElements";

describe("groupArrayElements", () => {
  it("should return a new array with the correct nested arrays when the size of the original array can be divided equally by N", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6], 3);
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(result).toEqual(expected);
  });

  it("should return a new array with the correct nested arrays when the size of the original array cannot be divided equally by N", () => {
    const result = groupArrayElements([1, 2, 3, 4], 3);
    const expected = [[1], [2], [3, 4]];

    expect(result).toEqual(expected);
  });

  it("should return an array with N number of empty nested arrays if the original array is empty", () => {
    const result = groupArrayElements([], 3);
    const expected = [[], [], []];

    expect(result).toEqual(expected);
  });

  it("should return an array with the correct nested arrays when N is greater than the size of the original array", () => {
    const result = groupArrayElements([1, 2, 3], 5);
    const expected = [[1], [2], [3], [], []];

    expect(result).toEqual(expected);
  });

  it("should return an error if N is less than 1", () => {
    expect(() => groupArrayElements([1, 2, 3], -1)).toThrowError(
      "Please provide a positive integer."
    );
  });
});
