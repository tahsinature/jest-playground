const request = require("supertest");
const app = require("../../app");

let token;
const exec = () =>
  request(app)
    .get("/posts")
    .set({ auth: token });

describe("/ route", () => {
  beforeEach(() => {
    token = "valid_token";
  });

  test("should get 400 error if there is no token", async done => {
    token = "";
    const response = await exec();
    expect(response.status).toBe(400);
    done();
  });

  test("should get 401 error if there is invalid token", async done => {
    token = "invalid";
    const response = await exec();
    expect(response.status).toBe(401);
    done();
  });

  test("should get 200 response with 100 posts", async done => {
    const response = await exec();
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(100);
    done();
  });
});
