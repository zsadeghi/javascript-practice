// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson
function logEach(array) {

  for (var i = 0; i < array.length; i++) {
    console.log(i + ':' + array[i]);
  }
}

console.log(logEach(['Anthony', 'John', 'carson']));
