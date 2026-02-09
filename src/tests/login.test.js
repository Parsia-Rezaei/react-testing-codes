import { describe, expect, it } from "vitest";
import { login } from "../utils/login";

describe("Testing Login user", () => {
  it("return a token when credentials are valid", async () => {
    await expect(login("admin", "1234")).resolves.toEqual({
      token: "fake-jwt-token",
    });
  });
  it("rejects when credentials are missing", async () => {
    await expect(login("", "")).rejects.toThrow("Missing credentials");
  });

  it("Rejects when credentials are wrong", async () => {
    await expect(login("user", "wrong")).rejects.toThrow("Invalid credentials");
  });
});
