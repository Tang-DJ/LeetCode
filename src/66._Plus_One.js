// 66._Plus_One
//
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//
//     The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
//
//     You may assume the integer does not contain any leading zero, except the number 0 itself.
//
//     Example 1:
//
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
//
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// 位数太大，超出计算限制，需要改成字符
//Input:
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
//Expected:
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     if(digits.length===0)
//         return '';
//     var carry = false;
//     for(var i=digits.length-1;i>=0;i--){
//         if(i===digits.length-1||carry)
//             digits[i]++;
//         if(digits[i]>9){
//             carry = true;
//             digits[i]=0;
//         }else carry = false;
//     }
//     if(carry)
//         digits.unshift(1);
//     return digits;
// };


var plusOne = function(digits) {
    for(var i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0;
    }
    digits.unshift(1);
    return digits;
};

var re = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);
console.log(re);