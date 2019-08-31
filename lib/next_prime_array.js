/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

var primeCache = {};

  function isPrime(number) {
    if ( primeCache[number] === undefined) {
      primeCache[number] = originalIsPrime(number);
    }
    return primeCache[number];
  }

  function originalIsPrime(number) {
    if (number < 2) {
      return false;
    }

    for (var i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  function nextPrime(n) {
    for (var i = n + 1; true; i++) {
      if (isPrime(i)) {
        return i;
      }
    }
  }

  function nextPrimeArray(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
      var number = array[i];

      if (isPrime(number)) {
        var newPrime = nextPrime(number);
        result.push(newPrime);
      } else {
        result.push(number);
      }
    }

    return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
