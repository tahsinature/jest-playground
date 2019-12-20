const axios = require("axios").default;

module.exports.getAllPosts = (req, res, next) => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  axios
    .get(url)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      res.status(500).send("somoething went wrong");
    });
};

const verify = token => {
  return token === "valid";
};

module.exports.verifyToken = (req, res, next) => {
  const token = req.body.token;

  if (verify(token)) res.status(200).send("success");
  else res.status(400).send("invalid token");

  // res.send("response");
};
