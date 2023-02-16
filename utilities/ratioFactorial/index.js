const rat = require("../ratio/index");
const fact = require("../factorial/index");
const ratioAndFactorial = (a, b, c) => {
  const ratio = rat(a, b);
  const factorial = fact(c);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
