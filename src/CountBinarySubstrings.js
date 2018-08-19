// Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
//
//     Substrings that occur multiple times are counted the number of times they occur.
//
//     Example 1:
// Input: "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
//
//     Notice that some of these substrings repeat and are counted the number of times they occur.
//
//     Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
//     Example 2:
// Input: "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
//     Note:
//
// s.length will be between 1 and 50,000.
//     s will only consist of "0" or "1" characters.

/**
 * 因为只有0和1，将0和1以数组个数的方式存储可以完美解决数字量太大的问题，然后数组相邻两数的交集即可，在这个题中不需要列出所有可能性
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var str = s.split("");
    var length = str.length;
    var temp=[], k=0;
    var sum = 0;
    temp[k]=1;
    for(var i=1;i<length;i++){
        if(str[i]!==str[i-1]){
            k++;
            temp[k]=1;
        }else {
            temp[k]++;
        }
    }
    for(var l=1;l<temp.length;l++){
        sum+=Math.min(temp[l],temp[l-1]);
    }
    return sum;
};


countBinarySubstrings("10101");

// error first 没有判断110的情况，判断情况只判断了奇数的情况，但是偶数1010001也可能出现0001
// [ '0011', '01', '110', '10' ]
// Input:
// "00110"
// Output:
// 4
// Expected:
// 3
// Stdout:
// value=0 index=0
// value=0 index=1
// value=1 index=2
// value=1 index=3
// value=0 index=4


// 来了一个49998的数，然后超时
// 暴力解法
// var countBinarySubstrings = function(s) {
//     var str = s.split("");
//     var result =[];
//     str.forEach(function (value,index) {
//         var temp ="";
//         var diff = false;
//         var i = index;
//         var sum = 0;
//         while (i<str.length){
//             if(diff && str[i]===value)
//                 break;
//             temp+=str[i];
//             if(str[i]!==value){
//                 diff=true;
//             }else
//                 sum++;
//             i++;
//         }
//         temp = temp.slice(0,sum*2);
//         if(diff&&temp.length===2*sum)
//             result.push(temp);
//     });
//     console.log(result);
//     return result.length;
// };