/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {

  var array = sentence.split(' ');

  for ( i = 0; i <= array.length; i ++) {

    if (array[i] === 'I') {
       array[i] = 'we';
     } else if (array[i] === 'mine') {
       array [i] = 'ours';
     } else if (array [i] === 'my') {
       array [i] = 'our';
     } else if (array [i] === 'me') {
       array [i] = 'us';
     }
   }
   return array.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
