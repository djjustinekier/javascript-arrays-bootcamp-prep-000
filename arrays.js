var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return array.push(element);

}

function destructivelyAddElementToEndOfArray() {

}

fucntion destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}
