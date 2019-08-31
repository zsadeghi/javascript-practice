// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false

// function isInside(array, ele) {
//   for (var i = 0; i < array.length; i++) {
//     if (ele === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }

console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'));
console.log(isInside(['chase', 'phi', 'eliot'], 'fred'));

function isInside(array, ele) {
  return array.indexOf(ele) > -1;
}
