const secrets = ["valid1", "valid2", "valid3"];

module.exports.checkAgainstExternalResource = input => {
  console.log("from mocked util");
  return true;
};
