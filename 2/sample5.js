// const {dollar, yen} = require("./number.js");
// console.log(dollar);

const app = require("./number.js");
console.log(app.dollar);
const convert = require("./func.js");
convert.dollorConvert(app.dollar);
const yenConvert = require("./func.js");
convert.yenConvert(app.yen);