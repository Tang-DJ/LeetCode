// 167._Two_Sum_II_-_Input_array_is_sorted.js
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
//
//     The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
//
//     Note:
//
// Your returned answers (both index1 and index2) are not zero-based.
//     You may assume that each input would have exactly one solution and you may not use the same element twice.
//     Example:
//
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Input: numbers = [-1,0],-1 target = -1 Expected: [1,2]
// Input: numbers = [0,0,3,4],0 target = 0 Expected: [1,2]
// Input: numbers = [-3,3,4,90],0 target = 0 Expected: [1,2]
// Input: numbers = [2,3,4],6 target = 6 Expected: [1,3]
// Input: numbers = [1,2,3,4,4,9,56,90],8 target = 8 Expected: [4,5]

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(numbers.length===0)
        return [];
    var left = 0,right = numbers.length-1;
    while(right>left){
        if(numbers[right]+numbers[left]>target)
            right--;
        else if(numbers[right]+numbers[left]<target)
            left++;
        else return [left+1,right+1];
    }
    return [];
};
var re  = twoSum([2,3,4],6);
console.log(re);

// var twoSum = function(numbers, target) {
//     var i = 0,content={};
//     var zero = numbers.indexOf(0);
//     var y = numbers.lastIndexOf(target);
//     if(zero!==-1&&y!==-1){
//         return zero>y?[y+1,zero+1]:[zero+1,y+1];
//     }
//     while(numbers[i]<=target+Math.abs(numbers[0])){
//         if(numbers[i]<=target)
//             content[numbers[i]]=i;
//         if(content[target-numbers[i]]!==undefined){
//             if(content[target-numbers[i]]!==i)
//                 return [content[target-numbers[i]]+1,i+1];
//             else if(numbers.indexOf(numbers[i])!==numbers.lastIndexOf(numbers[i])){
//                 return [numbers.indexOf(numbers[i])+1,numbers.lastIndexOf(numbers[i])+1];
//             }
//         }
//         i++;
//     }
//     return [];
// };