// Given a non-empty array of integers, return the k most frequent elements.
//
//     For example,
//     Given [1,1,1,2,2,3] and k = 2, return [1,2].
//
//     Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//     Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

//  第一次的时候未将加入结果字符串写入当次数为0的情况
// 输入：
// [1]
// 1
// 输出：
// []
// 预期：
// [1]

//题目理解错误，是频率前k高的元素并非为频率大于k的元素
//对于排序的重写不是很熟悉，需要加强理解

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var hash ={};
    var result = [];
    var length= nums.length;
    for(var i =0;i<length;i++){
        if(hash[nums[i]]){
            hash[nums[i]]++;
        }
        else hash[nums[i]] = 1;
    }
    Object.keys(hash).sort(function(a,b){return hash[b]-hash[a]}).slice(0,k).forEach(function(x){
        result.push(parseInt(x));
        });
    console.log(result);
    return result;
};

topKFrequent([1,2],2);