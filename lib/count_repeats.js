/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/
function letterCount(string) {

  var count = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (count[letter] === undefined) {
      count[letter] = 1;
    } else {
      count[letter] += 1;
    }
  }
  return count;
}

function countRepeats(string) {

  var count = letterCount(string);
  var repeats = 0;
  for (var letter in count) {
    if (count[letter] > 1) {
      repeats +=1;
    }
  }
  return repeats;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
