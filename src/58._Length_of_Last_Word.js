// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
//     If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
//     Example:
//
// Input: "Hello World"
// Output: 5

//Input: "a " Expected: 1
//Input: ''

// 将数组以空格分割，找到最后一个字符串输出长度
// 注意以空格结尾以及输入空字符串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var temp = s.split(' ').filter(function (value) {
        return value!='';
    });
    return temp.length>0?temp.pop().length:0;
};

console.log(lengthOfLastWord(" "));