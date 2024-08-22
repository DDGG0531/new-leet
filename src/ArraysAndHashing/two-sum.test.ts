import { describe, expect, test } from "bun:test";
import fn from "./two-sum";

describe("two-sum", () => {
  test("case1", () => {
    const result = fn([2, 7, 11, 15], 9);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result.length).toBe(2);
  });

  test("case2", () => {
    const result = fn([3, 2, 4], 6);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
    expect(result.length).toBe(2);
  });

  test("case3", () => {
    const result = fn([3, 3], 6);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result.length).toBe(2);
  });
});
