/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/
function countLetter(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    count += 1;
  }
  return count;
}

function oddWordsOut(sentence) {

  var newSentence = [];
  var array = sentence.split(' ');
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    if (countLetter(word) % 2 === 0) {
      newSentence.push(word);
    }
  }
 return newSentence.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
