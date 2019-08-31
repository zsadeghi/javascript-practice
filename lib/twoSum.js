//Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.
//You may assume that each input would have exactly one solution,
//and you may not use the same element twice.

function twoSum(nums, target) {
  var result = [];
  for (var i = 0; i < nums.length; i ++) {
    var num1 = nums[i];
    for (var j = i + 1; j < nums.length; j ++ ) {
      var num2 = nums[j];
      if (num1 + num2 === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}
console.log(twoSum([4,7,11,34,5], 9));
console.log(twoSum([2,7,11,15], 9));
