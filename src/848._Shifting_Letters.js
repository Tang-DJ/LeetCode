// 848. Shifting Letters
// Medium
// We have a string S of lowercase letters, and an integer array shifts.
//
//     Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
//
// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
//
//     Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.
//
//     Return the final string after all such shifts to S are applied.
//
//     Example 1:
//
// Input: S = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation:
//     We start with "abc".
//     After shifting the first 1 letters of S by 3, we have "dbc".
//     After shifting the first 2 letters of S by 5, we have "igc".
//     After shifting the first 3 letters of S by 9, we have "rpl", the answer.
//     Note:
//
// 1 <= S.length = shifts.length <= 20000
// 0 <= shifts[i] <= 10 ^ 9


/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
let shiftingLetters = function(S, shifts) {
    let temp = S.split('');
    temp = temp.map(value => {
       return value.charCodeAt();
    });
    let sum = 0;
    for(let m = shifts.length-1;m>=0;m--){
        sum = shifts[m]+sum;
        shifts[m] = sum;
    }
    for(let n = 0;n<shifts.length;n++){
       temp[n] = String.fromCharCode((temp[n]+shifts[n]-97)%26+97);
    }
    return temp.join('');
};
console.time()
let result = shiftingLetters("abc",[3,5,9]);
console.timeEnd()
console.log(result);