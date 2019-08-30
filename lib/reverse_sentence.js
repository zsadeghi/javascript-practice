/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
   var array = sentence.split(' ');
   var result = [];
   for (var i = array.length -1; i >= 0; i -= 1) {
     result.push(array[i]);
     //var word = array[i]
     //result.push(word);
   }
   return result.join(' ');
 }



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
