const secrets = ["valid1", "valid2", "valid3"];

module.exports.checkAgainstExternalResource = input => {
  console.log("from original util");
  return secrets.includes(input);
};
