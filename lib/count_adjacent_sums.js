/***********************************************************************
Write the function `countAdjacentSums(arr, n)` that takes an array and
number. It should count the number of times that two adjacent numbers in
an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
***********************************************************************/

function countAdjacentSums(array, n) {
  var count = 0;
  for ( var i = 0; i < array.length - 1; i += 1) {
    var element = array [i]; //current
    var elementAdjacent = array [i + 1]; //next
    if ( element + elementAdjacent === n) {
      count += 1;
    }
  }
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countAdjacentSums;
//what if we had less than two items in the array.
