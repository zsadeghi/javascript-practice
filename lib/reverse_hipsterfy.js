/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
function lastVowel(word) {
  var vowels = 'aeiou';

  for (var i = word.length -1; i >= 0; i--) {
    var letter = word[i];
    if (vowels.indexOf(letter) > -1) {
     return i;
    }
  }
}

function reverseHipsterfyWord(word) {
  var vowels = 'aeiou';
  var lastVowelIdx = lastVowel(word);
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (vowels.indexOf(letter) === -1 || i === lastVowelIdx) {
      newWord += letter;
    }
  }

  return newWord;
}


function reverseHipsterfy(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = reverseHipsterfyWord(word);
    newWords.push(newWord);
  }

  return newWords.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
