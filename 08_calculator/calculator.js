const add = function(operand1 = 0, operand2 = 0) {
	return operand1 + operand2;
};

const subtract = function(operand1 = 0, operand2 = 0) {
	return operand1 - operand2;
};

const sum = function(array = [0]) {
  if (array.length === 0) {
    return 0;
  }
	return array.reduce((prev, val) =>  prev + val);
};

const multiply = function(arrOfOps) {
  let product = arrOfOps[0];
  for (let i=1; i<arrOfOps.length; i++) {
    product *= arrOfOps[i];
  }
  return product;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number = 0) {
	let result = 1;
  for (i=1; i<=number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
