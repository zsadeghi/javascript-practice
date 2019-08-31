/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
**
** tripler([1,2,3]); // => [ 3, 6, 9 ]
** tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*/

function tripler(array) {
  var tripler = [];
  for (var i = 0; i < array.length; i += 1) {
    var number = array[i];
    number = number * 3;
    tripler.push(number);
  }
  return tripler;
}
console.log(tripler([1,2,3]));
console.log(tripler([4, 1, 7]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = tripler;
