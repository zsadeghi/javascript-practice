/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
  var array;
   array = sentence.split(' ');
   for ( i = 0; i <= array.length; i ++) {
     if (array[i] === 'me') {
       array[i] = 'you';
     }
   }
   return array.join(' '); 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
