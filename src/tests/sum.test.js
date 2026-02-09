import { expect, test } from "vitest";
import { fetchData, sum } from "../utils/sum";
test("testin add function", () => {
  expect(sum(1, 2)).toBe(3);
});

test("vlidation of returned fetchData", async () => {
expect.assertions(1)
  try {
    const data = await fetchData();
    expect(data).toBe("value");
  } catch (error) {
    expect(error).toMatch("error");
  }
});
