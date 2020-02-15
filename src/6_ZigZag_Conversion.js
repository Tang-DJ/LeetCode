// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// "A"
// 1

// 链接：https://leetcode-cn.com/problems/zigzag-conversion


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 按行访问
 */
// var convert = function(s, numRows) {
//   let list = s.split('');
//   if (numRows === 1) {
//     return s;
//   }
//   let temp = {};
//   for (let m = 0 ; m < numRows; m++) {
//     temp[m] = [];
//   }
//   const arrayNum = numRows * 2 - 2;
//   for (const i in list) {
//     const ow = (+i+1) % arrayNum;
//     if ( ow <= numRows && ow !== 0 ) {
//       temp[ow - 1].push(list[i]);
//     }else if(ow === 0) {
//       temp[1].push(list[i]);
//     } else {
//       temp[2 * numRows - ow - 1].push(list[i]);
//     }
//   }
//   let res = '';
//   for (const l in temp) {
//     res += temp[l].join('')
//   }
//   return res;
// };

// 按行录入
var convert = function(s, numRows) {
  let now = 0;
  let west = 1; // +1  或 -1
  let list = s.split('');
  let temp = {};
  for (let m = 0 ; m < numRows; m++) {
    temp[m] = [];
  }
  for(let i = 0; i < list.length; i++) {
    temp[now].push(list[i]);
    west = now === numRows -1 ? (now === 0 ? 0 : -1) : (now === 0 ? 1 : west)
    now += west;
  }
  let res = '';
    for (const l in temp) {
      res += temp[l].join('')
    }
  return res;
};



let s = 'PAYPALISHIRING';
let rows = 3;
let result = convert(s, rows);
console.log(result);


