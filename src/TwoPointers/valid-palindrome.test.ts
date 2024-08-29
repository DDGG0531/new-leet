import { describe, expect, test } from "vitest";
import fn from "./valid-palindrome";

describe("valid-palindrome", () => {
  test("case1", () => {
    expect(fn("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("case2", () => {
    expect(fn("race a car")).toBe(false);
  });

  test("case3", () => {
    expect(fn(" ")).toBe(true);
  });
});
