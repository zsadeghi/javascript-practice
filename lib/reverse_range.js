/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  var array = [];
  if (start > end) {
    return [];
  }
  for(var i = end - 1; i > start; i -= 1){
    array.push(i);
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
