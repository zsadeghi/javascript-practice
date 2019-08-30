/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher) {
  var result = '';
  var array = sentence.split('');

  for (var i = 0; i < array.length; i += 1) {
    var letter = array[i];
    for (var key in cipher) {
      if ( key === letter) {
        array[i] = cipher[key];
      }
    }
  }
  result = array.join('');
  return result;
}

  //grab a string make it into an array.
  //take every letter in the string
  //check if its the key
  //then change the array
  //then return the sentence

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
