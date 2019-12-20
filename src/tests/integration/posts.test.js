const request = require("supertest");
const app = require("../../app");
const { verifyToken } = require("../../controllers");

let token;
const exec = () =>
  request(app)
    .get("/posts")
    .set({ auth: token });

describe("postman like tests", () => {
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

describe("test controller seperately by mocking", () => {
  const req = { body: { token } };
  const res = {
    send: jest.fn(),
    status: jest.fn().mockReturnThis()
  };
  beforeEach(() => {
    req.body.token = "valid";
  });

  test("should return 400 reesponse if token is invalid", () => {
    req.body.token = "invalid";
    verifyToken(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.send).toBeCalled();
  });

  test("should return 200 reesponse if token is valid", () => {
    verifyToken(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalled();
  });
});
