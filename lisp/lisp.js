const lisp = require("lisp");
const fs = require("fs");

const args = process.argv.splice(2);
const code = fs.readFileSync(args[0]).toString();
console.log(lisp(code));
