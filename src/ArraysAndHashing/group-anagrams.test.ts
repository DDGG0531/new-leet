import { describe, expect, test } from "bun:test";
import fn from "./group-anagrams";

// ! 這題測試不好寫，因為不限制順序，所以最好把結果都sort再比對
// 現在先簡單比
describe("group-anagrams", () => {
  test("case1", () => {
    const result = fn(["eat", "tea", "tan", "ate", "nat", "bat"]);

    expect(result).toEqual(
      expect.arrayContaining([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
    );
    expect(result.length).toBe(3);
  });

  test("case2", () => {
    const result = fn([""]);
    expect(result).toEqual(expect.arrayContaining([[""]]));
    expect(result.length).toBe(1);
  });

  test("case3", () => {
    const result = fn(["a"]);
    expect(result).toEqual(expect.arrayContaining([["a"]]));
    expect(result.length).toBe(1);
  });
});
