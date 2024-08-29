import { describe, expect, test } from "vitest";
import fn from "./product-of-array-except-self";

describe("product-of-array-except-self", () => {
  test("case1", () => {
    expect(fn([1, 2, 4, 6])).toStrictEqual([48, 24, 12, 8]);
  });

  test("case2", () => {
    expect(fn([-1, 0, 1, 2, 3])).toStrictEqual([0, -6, 0, 0, 0]);
  });
});
