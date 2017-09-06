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
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
    array = array.slice(1);
    return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function accessElementInArray(array, index) {
  return array.splice(index);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var newArray = array.splice(0, 1)
  return newArray;
}

function removeElementFromEndOfArray() {
  var end = array.length - 2;
  var newArray = array.splice(0, end);
  return newArray;
}
