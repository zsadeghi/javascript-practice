/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/

function divisibleByFivePairSum(array) {
    var result = [];
    for ( var i = 0 ; i < array.length; i += 1) {
      var num1 = array[i];
      for (var j = i + 1; j < array.length; j++) {
        var num2 = array[j];

        if ((num1 + num2) % 5 === 0) {
          var pair = [i, j];
          result.push(pair);
        }
      }

    }
  return result;
  }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
