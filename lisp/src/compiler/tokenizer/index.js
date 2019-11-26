const operator = require("../operator");
const TokenState = require("./tokenState");

const bracketToken = ["(", ")"];
const operatorToken = Object.keys(operator);

module.exports = codeString => {
  const len = codeString.length;
  const tokenArr = [];
  let i = 0;
  let current;
  while (i < len) {
    // console.log(codeString[i]);
    const token = codeString[i];
    current = current ? current.next(token) : new TokenState(token);
    console.log(current);
    if (current.isEnd) {
      current.str && tokenArr.push(current.str);
      current = "";
    }
    i++;
  }
  console.log(tokenArr);
};
