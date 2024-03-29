/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

function vowelShift(sentence) {

  var replace = {
    a : 'e',
    e : 'i',
    i : 'o',
    o : 'u',
    u : 'a',
  };

  var newSentence = '';

  for (var i = 0; i < sentence.length; i++) {
    var character = sentence[i];

    if (replace[character] === undefined) {
      newSentence += character;
    } else {
      newSentence += replace[character];
    }
  }
  return newSentence;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
