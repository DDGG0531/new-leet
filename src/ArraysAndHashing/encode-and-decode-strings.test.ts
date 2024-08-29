import { describe, expect, test } from "vitest";
import { encode, decode } from "./encode-and-decode-strings";

describe("encode-and-decode-strings", () => {
  test("case1", () => {
    let strs = ["neet", "code", "love", "you"];
    expect(decode(encode(strs))).toStrictEqual(strs);
  });

  test("case2", () => {
    let strs = ["we", "say", ":", "yes"];
    expect(decode(encode(strs))).toStrictEqual(strs);
  });
});
