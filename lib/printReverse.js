// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

function printReverse(min, max) {

 for (var i = max - 1; i > min; i--) {
   console.log(i);
 }
}
console.log(printReverse(13, 18));
console.log(printReverse(90, 94));
