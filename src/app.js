const express = require("express");
const app = express();
const middleware = require("./middleware");
const { getAllPosts } = require("./controllers");

app.get("/posts", middleware, getAllPosts);

module.exports = app;
