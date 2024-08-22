import { describe, expect, test } from "bun:test";
import { twoSum } from "./two-sum";

describe("twoSum", () => {
  test("case1", () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result.length).toBe(2);
  });

  test("case2", () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
    expect(result.length).toBe(2);
  });

  test("case3", () => {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result.length).toBe(2);
  });
});
