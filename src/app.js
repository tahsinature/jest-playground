const express = require("express");
const app = express();
const middleware = require("./middleware");
const { getAllPosts, verifyToken, verifyAgainstExternalResources } = require("./controllers");

app.use(express.json());

app.get("/posts", middleware, getAllPosts);
app.post("/verify-token", verifyToken);
app.post("/verify-external", verifyAgainstExternalResources);

module.exports = app;
