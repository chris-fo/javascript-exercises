const repeatString = function(string, times) {
  let resultString = '';
  if (times < 0) resultString = 'ERROR';
  for (let i = 0; i < times; i ++) {
    resultString += string;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
