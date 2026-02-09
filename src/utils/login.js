export async function login(username, password) {
  if (!username || !password) {
    throw new Error("Missing credentials");
  }

  if (username !== "admin" || password !== "1234") {
    throw new Error("Invalid credentials");
  }

  return { token: "fake-jwt-token" };
}
