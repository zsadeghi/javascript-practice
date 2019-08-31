/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

function divisibleByThreePairSum(array) {
  var result = [];
  for ( var i = 0 ; i < array.length; i += 1) {
    var num1 = array[i];
    for (var j = i + 1; j < array.length; j++) {
      var num2 = array[j];

      if ((num1 + num2) % 3 === 0) {
        var pair = [i, j];
        result.push(pair);
      }
    }

  }
return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divisibleByThreePairSum;
