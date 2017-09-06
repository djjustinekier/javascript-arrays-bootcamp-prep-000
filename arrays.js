var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  [beginning, ...array];
  
}

function destructivelyAddElementToBeginningOfArray(array, beginning) {
  array.unshift(element);
  return array;
}
console.log (addElementToBeginningOfArray(chocolateBars, "hello"))
