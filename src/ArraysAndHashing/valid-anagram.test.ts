import { describe, expect, test } from "bun:test";
import { validAnagram } from "./valid-anagram";

describe("validAnagram", () => {
  test("case1", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
  });

  test("case2", () => {
    expect(validAnagram("rat", "car")).toBe(false);
  });
});
