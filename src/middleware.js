module.exports = (req, res, next) => {
  const token = req.headers["auth"];
  if (!token) return res.status(400).send("no token. set header: auth: valid_token");
  if (token !== "valid_token") {
    return res.status(401).send("invalid token. set header: auth: valid_token");
  }
  req.user = {
    id: 1,
    name: "John"
  };
  next();
};
