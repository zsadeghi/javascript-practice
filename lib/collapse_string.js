/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(string) {
 var result = string.split("");

 for ( var i = 0; i < result.length - 1; i ++) {
   var character = result[i];
   var nextCharacter = result[i + 1];

   if (character === nextCharacter) {
     //continue;
     //else if res += char
     result.splice(i, 1);
     i -= 1;
   }
 }
   return result.join("");
 }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
//
