import { describe, expect, test } from "vitest";
import fn from "./longest-consecutive-sequence";

describe("longest-consecutive-sequence", () => {
  test("case1", () => {
    // Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

    expect(fn([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test("case2", () => {
    expect(fn([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });
});
