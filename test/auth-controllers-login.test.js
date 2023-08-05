import mongoose from "mongoose";
import "dotenv/config";
import request from "supertest";

import app from "../app.js";
import User from "../models/user.js";

const { DB_HOST_TEST, PORT } = process.env;

// 1) status - code of response must be 200
// 2) response must contain token
// 3) response must contain object 'user' with 2 fields: 'email ' and 'subscription' both with type of data: string

describe("test login func", () => {
  let server = null;

  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  test("login response", async () => {
    const requestBody = {
      email: "fam@gmail.com",
      password: "fam123456",
    };

    await request(app).post("/users/register").send(requestBody);
    const response = await request(app).post("/users/login").send(requestBody);

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty("token");
    expect(response.body.token).toBeTruthy();
    expect(typeof response.body.token).toEqual("string");

    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toHaveProperty("email");
    expect(response.body.user).toHaveProperty("subscription");

    expect(typeof response.body.user.email).toEqual("string");
    expect(typeof response.body.user.subscription).toEqual("string");
  });
});
