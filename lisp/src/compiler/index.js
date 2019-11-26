const tokenizer = require("./tokenizer");

module.exports = codeString => {
  const tokens = tokenizer(codeString);
  console.log("tokens", tokens);
};
