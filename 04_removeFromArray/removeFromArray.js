const removeFromArray = function(array = [], ...elementsToRemove) {
  let arrayOfElementsToRemove = Array.from(elementsToRemove);
  let resultArray = array;
  for (element of arrayOfElementsToRemove) {
    if (array.includes(element)) {
      let index = array.indexOf(element);
      resultArray.splice(index, 1);
    }
  }
  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
