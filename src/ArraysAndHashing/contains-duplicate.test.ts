import { describe, expect, test } from "bun:test";
import fn from "./contains-duplicate";

describe("contains-duplicate", () => {
  test("case1", () => {
    expect(fn([1, 2, 3, 1])).toBe(true);
  });

  test("case2", () => {
    expect(fn([1, 2, 3, 4])).toBe(false);
  });

  test("case3", () => {
    expect(fn([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
