// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
//
//     Example 1:
//
// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
//
//
// Note:
//
//     S string length is in [1, 10000].
//     C is a single character, and guaranteed to be in string S.
//     All letters in S and C are lowercase.

/**
 * 对于首尾进行单独的处理
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var temp = S.split("");
    var targetList = [];
    var result = [];
    temp.forEach(function (value,index) {
        if(value===C)
            targetList.push(index);
    });
    var k=0;
    for(var i=0;i<temp.length;i++) {
        if (i < targetList[0]) {
            result.push(targetList[0] - i);
        } else if (i === targetList[0]) {
            result.push(0);
            k++;
        }

        if(i>targetList[k-1]&&i<targetList[k]){
            result.push(Math.min((i-targetList[k-1]),(targetList[k]-i)))
        }else if (i===targetList[k]){
            result.push(0);
            k++;
        }

        if(i>targetList[targetList.length-1]){
            result.push(i-targetList[targetList.length-1]);
            k++;
        }
    }
    return result;
};

shortestToChar('aaba','b');

// 忘记考虑最后的数比target[k]大的情况
// Input:
//     "aaba"
// "b"
// Output:
//     [2,1,0]
// Expected:
//     [2,1,0,1]