import { describe, expect, test } from "vitest";
import fn from "./top-k-frequent-elements";

describe("top-k-frequent-elements", () => {
  test("case1", () => {
    expect(fn([1, 1, 1, 2, 2, 3], 2)).toEqual(expect.arrayContaining([1, 2]));
  });

  test("case2", () => {
    expect(fn([1], 1)).toEqual(expect.arrayContaining([1]));
  });

  test("extra1", () => {
    expect(fn([4, 1, -1, 2, -1, 2, 3], 2)).toEqual(
      expect.arrayContaining([2, -1])
    );
  });
});
