const request = require("supertest");
const app = require("../../app");

describe("against external resource", () => {
  test("should give invalid response for arbitrary token", async () => {
    const response = await request(app)
      .post("/verify-external")
      .send({ token: "arbitrary" });
    expect(response.status).toBe(400);
  });
});
