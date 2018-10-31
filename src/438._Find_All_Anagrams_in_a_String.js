// 438._Find_All_Anagrams_in_a_String
// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
//
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
//
// The order of output does not matter.
//
//     Example 1:
//
// Input:
//     s: "cbaebabacd" p: "abc"
//
// Output:
//     [0, 6]
//
// Explanation:
//     The substring with start index = 0 is "cba", which is an anagram of "abc".
//     The substring with start index = 6 is "bac", which is an anagram of "abc".
//     Example 2:
//
// Input:
//     s: "abab" p: "ab"
//
// Output:
//     [0, 1, 2]
//
// Explanation:
//     The substring with start index = 0 is "ab", which is an anagram of "ab".
//     The substring with start index = 1 is "ba", which is an anagram of "ab".
//     The substring with start index = 2 is "ab", which is an anagram of "ab".



/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * too slow
 * Runtime: 9424 ms, faster than 0.96% of JavaScript online submissions for Find All Anagrams in a String.
 */
// var findAnagrams = function(s, p) {
//     var arr=s.split('');
//     var target = p.split('');
//     var left=0;
//     target.sort();
//     var result = [];
//     while(left+target.length-1<arr.length){
//         var temp = arr.slice(left,left+target.length);
//         temp.sort();
//         for(var i =0;i<target.length;i++){
//             if(target[i]!==temp[i]){
//                 if(i) left+=1;
//                 else left++;
//                 break;
//             }
//         }
//         if(i===target.length){
//             result.push(left);
//             left++;
//         }
//     }
//     return result;
// };
//
// var re = findAnagrams("cbaebabacd","abc");
// console.log(re);