import { describe, expect, test } from "bun:test";
import { containsDuplicate } from "./contains-duplicate";

describe("containsDuplicate", () => {
  test("case1", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("case2", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test("case3", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
