const fibonacci = function(inputNumber) {
  inputNumber = Number.parseInt(inputNumber);
  if (inputNumber<0) {
    return 'OOPS';
  }
  // if (inputNumber === 0) return 0;
  let prevNum = 0;
  let newNum = 1;

  for (let i=1; i<inputNumber; i++) {
    let tmp = prevNum + newNum;
    prevNum = newNum;
    newNum = tmp;
  }
  return newNum;
};

// Do not edit below this line
module.exports = fibonacci;
