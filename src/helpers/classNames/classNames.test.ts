import {describe, expect, test} from "vitest";
import {classNames} from "./classNames.ts";

describe("classNames", () => {
  test("Single class", () => {
    const expected = "someClass";
    expect(classNames("someClass", [])).toBe(expected);
  });
  test("Multiple classes", () => {
    const expected = "someClass secondClass third";
    expect(classNames("someClass", ["secondClass", "third"])).toBe(expected);
  });
})