var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, beginning) {
  [beginning, ...array];
  return array;
}
console.log (addElementToBeginningOfArray(chocolateBars, "hello"))
