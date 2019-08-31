/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/
function countLetter(word, letter) {

  var count = 0;

   for (var i = 0; i < word.length; i++) {
     if (word[i] === letter) {
       count += 1;
     }
   }
  return count;
}

function favoriteWord(favoriteLetter, sentence) {

  var words = sentence.split(' ');
  var favoriteWord = '';

   for (var i = 0; i < words.length; i++) {
     var word = words[i];
     if (countLetter(word, favoriteLetter) > countLetter(favoriteWord, favoriteLetter) ) {
       favoriteWord = word;
     }
   }
  return favoriteWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
