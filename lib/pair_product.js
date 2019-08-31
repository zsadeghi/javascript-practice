/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct(arr, number) {
  var result = [];
  var i = 0;
  while (i < arr.length -1) {
    var num1 = arr[i];
    var j = i + 1;
    while (j < arr.length) {
      var num2 = arr[j];
      if (num1 * num2 === number) {
        result.push([i, j]);
      }
      j += 1;
    }
    i += 1;
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairProduct;
