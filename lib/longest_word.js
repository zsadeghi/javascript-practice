/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:
longestWord('app'); // => 'app'
longestWord('app academy'); // => 'academy'
longestWord('app academy is'); // => 'academy'
longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  var longestWord = '';
  var words = sentence.split(' ');
  for ( var i = 0; i < words.length; i ++) {
    var word = words[i];
    var longestWordLength = longestWord.length;
    var wordLength = word.length;
    if ( wordLength >= longestWordLength ) {
      longestWord = word;
    }
  }
  return longestWord;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
//
