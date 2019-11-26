const compiler = require("./compiler");
const fs = require("fs");

const args = process.argv.splice(2);
const code = fs.readFileSync(args[0]).toString();

// console.log(args, code);
compiler(code);
