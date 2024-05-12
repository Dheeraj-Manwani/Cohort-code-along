import { describe, expect, test } from "@jest/globals";
import { multiply, sum } from "..";

describe("sum module", () => {
  test("add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("add -4 + -2 to equal -6", () => {
    expect(sum(-4, -2)).toBe(-6);
  });
  test("add -7 + 9 to equal -2", () => {
    expect(sum(-7, 9)).toBe(2);
  });
});

describe("multiply module", () => {
  test("multiply 2 and 3", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  test("multiply -4 and 5", () => {
    expect(multiply(-4, 5)).toBe(-20);
  });
  test("multiply -2 and -8", () => {
    expect(multiply(-2, -8)).toBe(16);
  });
});
