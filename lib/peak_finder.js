/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

function peakFinder(array) {
  var result = [];
  var leftNum;
  var num;
  var rightNum;

  for (var i = 0; i < array.length; i += 1) {
    num = array[i];
    leftNum = array[i - 1];
    rightNum = array[i + 1];
    if ( i === 0 && num > rightNum) {
      result.push(i);

    } else if ((i === array.length - 1) && (num > LeftNum)) {
      result.push(i);
    } else if ((num > leftNum) && num > rightNum) {
      result.push(i);
    }
  }

  return result;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = peakFinder;
