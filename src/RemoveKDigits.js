//
// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.
//
//     Note:
// The length of num is less than 10002 and will be ≥ k.
//     The given num does not contain any leading zero.
//     Example 1:
//
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
//     Example 2:
//
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
//     Example 3:
//
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

//使用栈的思路
//如果n是num的长度，我们要去除k个，那么需要剩下n-k个数，定义一个result数组用于保存剩下的字符，与result中最后一个字符相比，比它小，
//栈中最后一个字符出栈，该字符进栈，否则该字符直接进栈。值得注意的是在删除k个数之后，若剩下的数前面有0，应该去掉。
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k){
    //uncomplete
    if(k==0)
        return num;
    var min = num.split('');
    var result =[];

    for(var l=0;l<k;l++){
        var index = 0;
        var n = min.length;
        for(var i = 0; i < n; i++) {
            if((i == l -1) || min[i] > min[i + 1]) {
                index = i;
                break;
            }
        }
        min.splice(index,1)
        console.log(min);

    }
    console.log(min);
};
console.log(removeKdigits("1432219",3));


/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// var removeKdigits = function(num, k) {
//     let stack = [], numDigits = num.length;
//     for (let i = 0; i < numDigits; i++) {
//         while(k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
//             stack.pop();
//             k--;
//         }
//         stack.push(num[i]);
//     }
//     stack = k > 0 ? stack.slice(0, -k) : stack;
//     return stack.join('').replace(/^0+/, '') || '0';
// };