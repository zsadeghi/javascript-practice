/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

function moreDotLessDash(str) {

  var dotCount = 0;
  var dashCount = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char === '-') {
      dashCount += 1;
    } else if (char === '.') {
      dotCount += 1;
    }
  }
  return (dotCount > dashCount);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
