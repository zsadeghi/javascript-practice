/***********************************************************************
Write a function `uncompressString(str)` that takes in a "compressed"
string and returns the "uncompressed" version of the string. In the
input `str`, every letter is followed by a single digit number that
specifies how many times that character is repeated.

HINT: Use the built-in `Number` function to turn the string
representation of a number into a number
Number('42'); // => 42;

Examples:

uncompressString('a2b4c1'); // => 'aabbbbc'
uncompressString('b1o2t1'); // => 'boot'
uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
***********************************************************************/

function uncompressString(str) {

    var result = '';

    for (var i = 0; i < str.length-1; i += 2) {
      var char = str[i];
      var num = Number(str[i + 1]);

      for (var j = 0; j < num; j += 1) {
        result += char;
      }
    }
    return result;
  }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
 module.exports = uncompressString;


// var result = "";
// var counter = 0;
//
// while (counter < str.length) {
//   var ele = string[counter];
//   if
// }
