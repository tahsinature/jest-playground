const axios = require("axios").default;
const { checkAgainstExternalResource } = require("./util");

module.exports.getAllPosts = (req, res) => {
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

module.exports.verifyToken = (req, res) => {
  const token = req.body.token;

  if (verify(token)) res.status(200).send("success");
  else res.status(400).send("invalid token");
};

module.exports.verifyAgainstExternalResources = (req, res) => {
  const token = req.body.token;
  const isValid = checkAgainstExternalResource(token);

  if (isValid) res.status(200).send("valid");
  else res.status(400).send("invalid");
};
