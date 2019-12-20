const express = require("express");
const app = express();
const middleware = require("./middleware");
const { getAllPosts, verifyToken } = require("./controllers");

app.use(express.json());

app.get("/posts", middleware, getAllPosts);
app.post("/verify-token", verifyToken);

module.exports = app;
