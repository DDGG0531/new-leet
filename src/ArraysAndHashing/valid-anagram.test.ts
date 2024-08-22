import { describe, expect, test } from "bun:test";
import fn from "./valid-anagram";

describe("valid-anagram", () => {
  test("case1", () => {
    expect(fn("anagram", "nagaram")).toBe(true);
  });

  test("case2", () => {
    expect(fn("rat", "car")).toBe(false);
  });
});
