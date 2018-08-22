// Given a 32-bit signed integer, reverse digits of an integer.
//
//     Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
//     Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

//结果也需要进行大小判断
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x<-Math.pow(2,31)||x>Math.pow(2,31)-1||x===0)
        return 0;
    var temp = x.toString().split("");
    if(x<0)
        temp.shift();
    temp = temp.reverse();
    while(temp[0]==0){
        temp.shift();
    }
    temp = temp.toString().replace(/,/g,'');
    if(x<0)
        temp=-parseInt(temp);
    if(temp<-Math.pow(2,31)||temp>Math.pow(2,31)-1)
        return 0;
    return parseInt(temp);
};

console.log(reverse(1534236469));