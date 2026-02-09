import { describe, expect, it, vi } from "vitest";
import { fetchData } from "../utils/sum";

describe("Fetch posts", () => {
  it("Returns data when fetch is successful", async () => {
    const mockResponse = { title: "mio" };
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        }),
      ),
    );
    const data = await fetchData();
    expect(data).toEqual(mockResponse);
  });
  it("throws an erro when resposne is no ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: false,
        }),
      ),
    );
    await expect(fetchData()).rejects.toThrow("Failed to fetch user");
  });  
});
