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
