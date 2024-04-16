import {test, expect} from "vitest";
console.log({test})
test("should pass", () => {
  expect(1 + 1).toBe(2);
})