// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

console.log(twoSum([-1, -2, -3, -4,-5],-8));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    var re = [];
    var index = [];
    for(var i =0;i<nums.length;i++){
        if(re.indexOf(nums[i])>-1){
            console.log(re.indexOf(nums[i])>-1);
            return [index[re.indexOf(nums[i])],i]
        }
        re.push(target-nums[i]);
        index.push(i);
    }
};