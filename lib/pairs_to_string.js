/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/

function pairsToString(arr) {

  var string = '';

  for (var i = 0; i < arr.length; i++) {
    var subArray = arr[i];
    var num = subArray[1];
    var letter = subArray[0];

    for (var j = 0 ; j < num; j++) {
      string += letter;
    }
  }
  return string;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
