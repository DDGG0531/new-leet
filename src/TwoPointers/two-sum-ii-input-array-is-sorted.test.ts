import { describe, expect, test } from "vitest";
import fn from "./two-sum-ii-input-array-is-sorted";

describe("two-sum-ii-input-array-is-sorted", () => {
  test("case1", () => {
    expect(fn([2, 7, 11, 15], 9)).toBe([1, 2]);
  });

  test("case2", () => {
    expect(fn([2, 3, 4], 6)).toBe([1, 3]);
  });

  test("case3", () => {
    expect(fn([-1, 0], -1)).toBe([1, 2]);
  });
});
