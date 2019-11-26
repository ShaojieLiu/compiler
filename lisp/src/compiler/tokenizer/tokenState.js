const operator = require("../operator");

const bracketToken = ["(", ")"];
const operatorToken = Object.keys(operator);
const numberToken = Array.from({ length: 10 }).map((v, i) => String(i));

const judgeType = token => {
  const dict = {
    number: numberToken,
    operator: operatorToken,
    bracket: bracketToken
  };
  for (let type in dict) {
    if (dict[type].includes(token)) {
      return type;
    }
  }
};

class TokenState {
  constructor(token) {
    this.str = token.trim();
    this.type = judgeType(token);
    const isNumber = this.type === "number";
    this.isEnd = !isNumber;
  }

  next(token) {
    if (this.type === judgeType(token)) {
      this.str += token.trim();
    } else {
      this.isEnd = true;
    }
    return this;
  }
}

module.exports = TokenState;
