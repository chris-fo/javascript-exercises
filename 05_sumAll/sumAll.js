const sumAll = function(numberOne, numberTwo) {
  if (!(typeof numberOne === 'number' && typeof numberTwo === 'number' && numberOne >= 0 && numberTwo >= 0 )) return 'ERROR';
  let higherNumber = Math.max(numberOne, numberTwo);
  let lowerNumber = Math.min(numberOne, numberTwo);
  let sum = 0;
  for (let i = lowerNumber; i <= higherNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
