// Given two binary strings, return their sum (also a binary string).
//
// The input strings are both non-empty and contains only characters 1 or 0.
//
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"


// Input:
//     "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// Expected:
// "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
// 超过int的位数

//Input:
// "1010"
// "1011"
// Expected:
// "10101"

//使用字符串进行加法，如果使用var会无法计算大型数据
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var tempA = a.split('');
    var tempB = b.split('');
    var result =[];
    var aLen=tempA.length,bLen=tempB.length;
    var carry = 0;
    while(aLen>0||bLen>0){
        var charA=0,charB=0;
        if(aLen>0)
            charA = tempA[--aLen]-0;
        if(bLen>0)
            charB = tempB[--bLen]-0;
        var temp = charA + charB + carry;
        carry = temp>1?1:0;
        result.unshift(temp%2);
    }
    if(carry===1)
        result.unshift(1);
    return result.toString().replace(/,/g,'');
};



console.log(addBinary("1010"
,"1011"));