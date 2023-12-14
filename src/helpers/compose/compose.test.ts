import {describe, expect, test} from "vitest";
import compose from "./compose.ts";

describe("Compose", () => {
  const greet = (name: string) => `Hello, ${name}!`;
  const toUpperCase = (string: string) => string.toUpperCase();

  test("Single function", () => {
    const expected = "Hello, John!";
    const composedFunc = compose(greet);

    expect(composedFunc("John")).toBe(expected);
  });
  test("Multiple functions", () => {
    const expected = "HELLO, JOHN!";
    const composedFunc = compose(toUpperCase, greet);

    expect(composedFunc("John")).toBe(expected);
  });
});