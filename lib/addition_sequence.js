/***********************************************************************
Write a function `additionSequence(array, seq)` that takes in an array
of numbers and a sequence of numbers. The function should return a new
array where numbers of the original array are added to the numbers in
the sequence.

See the following example.

array = [3, 2, 5, 4, 2, 1, 10];
sequence = [2, 4, 6];

array:    3 2  5 4 2 1 10
sequence: 2 4  6 2 4 6  2
result:   5 6 11 6 6 7 12


Examples:

var arr1 = [3, 2, 5, 4, 2, 1, 10];
var seq1 = [2, 4, 6];
additionSequence(arr1, seq1);
// => [3+2, 2+4, 5+6, 4+2, 2+4, 1+6, 10+2] => [ 5, 6, 11, 6, 6, 7, 12 ]

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var seq2 = [1, 2];
additionSequence(arr2, seq2); // => [ 2, 4, 4, 6, 6, 8, 8 ]
***********************************************************************/

function additionSequence(array, sequence) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    var offSet = sequence[i % sequence.length];
      var sum = number + offSet;
      newArray.push(sum);
    }
  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = additionSequence;
