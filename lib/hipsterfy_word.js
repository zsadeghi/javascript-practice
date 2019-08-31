/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
 var vowels = ['a', 'e', 'i', 'o', 'u'];
 
 for (var i = word.length-1; i>=0; i--) {
   var letter = word[i];
   if (vowels.indexOf(letter.toLowerCase()) !== -1) {
     var hipsterfyWord = word.slice(0,i) + word.slice(i + 1);
     return hipsterfyWord;
   }
 }
 return word;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
