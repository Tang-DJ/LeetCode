// 3._Longest_Substring_Without_Repeating_Characters
// Given a string, find the length of the longest substring without repeating characters.
//
//     Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

//Input: " " Expected: 1 没有考虑空值
//Input: "au" Expected: 2 没有考虑没有重复的
//Input: "jbpnbwwd" Expected: 4
//Input: "uiggtyqjt" Expected: 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var temp = s.split('');
    if(temp.length==1)
        return 1;
    var hash = {},maxSum=0,start=0,end=0;
    while (end<temp.length){
        if(!hash[temp[end]])
            hash[temp[end]]=true;
        else {
            maxSum=maxSum>(end-start)?maxSum:(end-start);
            if(temp[end]==temp[end-1]){
                start=end;
                hash={};
                hash[temp[end]]=true;
            }else start++;
        }
        end++;
        if(end==temp.length)
            maxSum=maxSum>(end-start)?maxSum:(end-start);
    }
    if(maxSum==0)
        maxSum = end-start;
    return  maxSum;
};

console.log(lengthOfLongestSubstring("jbpnbwwd"));

// 复杂度过高，13%的跑速太慢了
// var lengthOfLongestSubstring = function(s) {
//     var temp = s.split('');
//     if(temp.length==1)
//         return 1;
//     var i=0,index=0,maxSum=0,hasSame=false;
//     while (index<temp.length){
//         i=index;
//         var sum=0;
//         var hash={};
//         hasSame=false;
//         while (i<temp.length){
//             if(!hash[temp[i]]){
//                 hash[temp[i]]=true;
//                 sum++;
//             }
//             else if(maxSum<sum){
//                 maxSum=sum;
//                 break;
//             }else {
//                 hasSame = true;
//                 break;
//             }
//             if(i==temp.length-1&&!hasSame){
//                 maxSum=sum>maxSum?sum:maxSum;
//                 break;
//             }
//             i++;
//         }
//         index++;
//     }
//     return maxSum;
// };