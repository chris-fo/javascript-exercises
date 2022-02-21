const ftoc = function(tempInF) {
  let tempInC = Number.parseFloat(((tempInF - 32) * (5/9)).toFixed(1));
  if (tempInC%1 === 0) {
    tempInC = Number.parseInt(tempInC);
  }
  return tempInC;
};

const ctof = function(tempInC) {
  let tempInF = Number.parseFloat((tempInC * (9/5) + 32).toFixed(1));
  if (tempInF%1 === 0) {
    tempInF = Number.parseInt(tempInF);
  }
  return tempInF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
