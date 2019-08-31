// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

function maxValue(array) {
  var max = null;
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    if ( max === 0 || number > max) {
      max = number;
    }
  }
  return max;
}

console.log(maxValue([12, 6, 43, 2]));
console.log(maxValue([]));
console.log(maxValue([-4, -10, 0.43]));
