// Given a binary array, find the maximum number of consecutive 1s in this array.
//
//     Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:
//
//     The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

/**
 * @param {number[]} nums
 * @return {number}
 */

//[1,0,1,1,0,1] Expected: 2
// [1,1,0,1] Expected: 2

//方法一：处理前后的0然后进行操作
// var findMaxConsecutiveOnes = function(nums) {
//     var max = 0,last = 0;
//     nums.push(0);
//     nums.unshift(0);
//     nums.filter(function (value,index) {
//         if(value===0){
//             max =(index-last)>max?(index-last):max;
//             last = index;
//         }
//     });
//     return max-1;
// };

//方法二 以计数模式操作
var findMaxConsecutiveOnes = function(nums) {
    var max = 0,temp = 0;
    for(var i =0;i<nums.length;i++){
        nums[i]===0?temp=0:temp++;
        max = Math.max(temp,max);
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1]));